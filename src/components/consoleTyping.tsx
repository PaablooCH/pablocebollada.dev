'use client'
import { FormEvent, useEffect, useRef, useState } from "react";

type ConsoleTypingProps = {
    block: CommandLine[],
    speed?: number,
    delay?: number
}

type Cmd = {
    color: string,
    text: string
}

type SubmittedMessage = {
    id: number,
    text: string
}

export type CommandLine = {
    cmds: Cmd[]
}

const SYSTEM_TEXT = '    SYSTEM';
const RESPONSE_TEXT = '        message_received.';
const FULL_RESPONSE_LENGTH = SYSTEM_TEXT.length + RESPONSE_TEXT.length;
const MAX_MESSAGE_LENGTH = 38;

const COLOR_PROMP: Record<string, string> = {
    mark: 'text-yellow-400',
    title: 'text-purple-500',
    entry: 'text-green-500',
    blank: 'text-white'
}

function ParseColor(color: string) {
    return COLOR_PROMP[color] ?? 'text-white';
}

function Cursor(animate: boolean = false, spacing: string = 'ml-2') {
    return <span className={`${spacing} ${animate && 'cursor_animation'} text-white cursor-default`}>▋</span>
}

export default function ConsoleTyping({block, speed = 50, delay = 0}: ConsoleTypingProps) {
    const [printingLine, setPrintingLine] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [cmdIndex, setCmdIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(false);
    const [delayed, setDelayed] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [submittedMessages, setSubmittedMessages] = useState<SubmittedMessage[]>([]);
    const [activeResponseId, setActiveResponseId] = useState<number | null>(null);
    const [responseLength, setResponseLength] = useState(0);
    const terminalInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);

        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const t = setTimeout(() => {
            setDelayed(true);
            setShowCursor(true);
        }, delay)
      
        return () => clearTimeout(t);
    }, [delay, prefersReducedMotion]);

    useEffect(() => {
        if (!delayed || prefersReducedMotion) {
            return;
        }
        if (lineIndex >= block.length) 
        {
            return;
        }

        const timeout = setTimeout(() => {
            const cmd = block[lineIndex].cmds[cmdIndex];
            if (cmdIndex === block[lineIndex].cmds.length)
            {
                setPrintingLine('');
                setCharIndex(0);
                setLineIndex((currentLineIndex) => currentLineIndex + 1);
                setCmdIndex(0);
            }
            else if (printingLine == cmd.text)
            {
                setPrintingLine('');
                setCmdIndex((i) => i + 1);
                setCharIndex(0);
            }
            else {
                setPrintingLine((currentPrintingLine) => currentPrintingLine + cmd.text[charIndex]);
                setCharIndex((currentCharIndex) => currentCharIndex + 1);
            }
        }, speed);
        
        return () => clearTimeout(timeout);
    }, [delayed, charIndex, printingLine, lineIndex, cmdIndex, speed, block, prefersReducedMotion]);

    useEffect(() => {
        if (activeResponseId === null) {
            return;
        }

        const timeout = setTimeout(() => {
            if (responseLength >= FULL_RESPONSE_LENGTH) {
                setActiveResponseId(null);
                return;
            }

            setResponseLength((length) => length + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [activeResponseId, responseLength, speed]);

    const isInteractiveReady = prefersReducedMotion || lineIndex >= block.length;

    useEffect(() => {
        if (isInteractiveReady && activeResponseId === null) {
            terminalInputRef.current?.focus();
        }
    }, [activeResponseId, isInteractiveReady]);

    function RenderLines(line: CommandLine, to: number, i: number) {
        return line.cmds.slice(0, to).map((cmd, j) => {
            return <span className={`${ParseColor(cmd.color)} whitespace-pre`} key={i * 10 + j}>
                {cmd.text}
            </span>;
        });
    }

    function RenderTyping(line: CommandLine, i: number) {
        return <>
                { cmdIndex < line.cmds.length && (
                    <span
                        key={i * 10 + cmdIndex}
                        className={`${ParseColor(line.cmds[cmdIndex].color)} whitespace-pre`}
                    >
                        {printingLine}
                    </span>
                )}
                { showCursor && Cursor() }
            </>
    }

    function submitMessage() {
        const message = inputValue.trim();
        if (!message) {
            return;
        }

        const id = Date.now();
        setSubmittedMessages((messages) => [...messages, { id, text: message }]);
        setInputValue('');

        if (!prefersReducedMotion) {
            setResponseLength(0);
            setActiveResponseId(id);
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        submitMessage();
    }

    function renderInteractivePrompt() {
        if (!isInteractiveReady) {
            return null;
        }

        return <>
            {submittedMessages.map((message) => {
                const isResponding = message.id === activeResponseId;
                const systemLength = isResponding ? Math.min(responseLength, SYSTEM_TEXT.length) : SYSTEM_TEXT.length;
                const responseLengthAfterSystem = isResponding ? Math.max(responseLength - SYSTEM_TEXT.length, 0) : RESPONSE_TEXT.length;

                return <div key={message.id}>
                    <p className="flex text-lg md:text-xl leading-relaxed code">
                        <span className="text-yellow-400 whitespace-pre">% </span>
                        <span className="text-white whitespace-pre-wrap">{message.text}</span>
                    </p>
                    <p className="flex text-lg md:text-xl leading-relaxed code">
                        <span className="text-purple-500 whitespace-pre">{SYSTEM_TEXT.slice(0, systemLength)}</span>
                        {isResponding && responseLength < SYSTEM_TEXT.length && Cursor(true)}
                    </p>
                    <p className="flex text-lg md:text-xl leading-relaxed code">
                        <span className="text-white whitespace-pre">{RESPONSE_TEXT.slice(0, responseLengthAfterSystem)}</span>
                        {isResponding && responseLength >= SYSTEM_TEXT.length && Cursor(true)}
                    </p>
                </div>;
            })}
            <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-xl items-center gap-3 code" aria-label="Interactive terminal">
                <span className="text-lg text-yellow-400" aria-hidden="true">%</span>
                <input
                    ref={terminalInputRef}
                    type="text"
                    aria-label="Type a message in the terminal"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    maxLength={MAX_MESSAGE_LENGTH}
                    className="terminal-input min-w-[1ch] max-w-[calc(100%-5rem)] border-0 bg-transparent p-0 text-lg text-white caret-(--color-primary)"
                    style={{ width: `${Math.max(inputValue.length, 1)}ch` }}
                    disabled={activeResponseId !== null}
                />
                {activeResponseId === null && Cursor(true, 'ml-0.5')}
                <button type="submit" aria-label="Execute terminal message" className="ml-auto text-sm font-bold tracking-wide text-primary hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer" disabled={activeResponseId !== null}>
                    [ EXEC ↵ ]
                </button>
            </form>
        </>;
    }

    if (prefersReducedMotion) {
        return <div>
            {block.map((line, i) => (
                <p className="flex text-lg md:text-xl leading-relaxed code" key={i}>
                    {RenderLines(line, line.cmds.length, i)}
                    {i === block.length - 1 && Cursor()}
                </p>
            ))}
            {renderInteractivePrompt()}
        </div>;
    }

    return <div>
        { block.slice(0, lineIndex).map((line, i) => {
                return <p className="flex text-lg md:text-xl leading-relaxed code" key={i}>
                    { RenderLines(line, line.cmds.length, i) }
                    {/* { i === (block.length - 1) && Cursor(true) } */}
                </p>
            })
        }

        { block.slice(lineIndex, lineIndex + 1).map((line, i) => {
                return <p className="flex text-lg md:text-xl leading-relaxed code" key={i}>
                    { RenderLines(line, cmdIndex, i) }
                    { RenderTyping(line, i) }
                </p>
            })
        }
        {renderInteractivePrompt()}
    </div>;
}
