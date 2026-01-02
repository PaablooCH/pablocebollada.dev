'use client'

import { useEffect, useState } from "react";

type ConsoleTypingProps = {
    block: CommandLine[],
    speed?: number,
    delay?: number
}

type Cmd = {
    color: string,
    text: string
}

export type CommandLine = {
    cmds: Cmd[]
}

const COLOR_PROMP: Record<string, string> = {
    mark: 'text-yellow-400',
    title: 'text-purple-500',
    entry: 'text-green-500',
    blank: 'text-white'
}

function ParseColor(color: string) {
    return COLOR_PROMP[color] ?? 'text-white';
}

function Cursor(animate: boolean = false) {
    return <span className={`ml-2 ${animate && 'cursor_animation'} text-white`}>▋</span>
}

export default function ConsoleTyping({block, speed = 50, delay = 0}: ConsoleTypingProps) {
    const [printingLine, setPrintingLine] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [cmdIndex, setCmdIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(false);
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
          setDelayed(true);
        }, delay)
      
        return () => clearTimeout(t);
    }, [delay]);

    useEffect(() => {
        if (!delayed) {
            return;
        }
        setShowCursor(true);
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
                setPrintingLine((currentPrintingLine) => currentPrintingLine = '');
                setCmdIndex((i) => i + 1);
                setCharIndex(0);
            }
            else {
                setPrintingLine((currentPrintingLine) => currentPrintingLine + cmd.text[charIndex]);
                setCharIndex((currentCharIndex) => currentCharIndex + 1);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [delayed, charIndex, printingLine, lineIndex, cmdIndex]);

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

    return <>
        { block.slice(0, lineIndex).map((line, i) => {
                return <p className="flex text-lg md:text-xl leading-relaxed code" key={i}>
                    { RenderLines(line, line.cmds.length, i) }
                    { i === (block.length - 1) && Cursor(true) }
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
    </>;
}