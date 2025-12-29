'use client'

import { useEffect, useMemo, useState } from "react";

type ConsoleTypingProps = {
    lines: string[],
    speed?: number,
    delay?: number
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
    return <span className={`ml-1 ${animate && 'cursor_animation'} text-white`}>▋</span>
}

export default function ConsoleTyping({lines, speed = 50, delay = 0}: ConsoleTypingProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>(['']);
    const [printingLine, setPrintingLine] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [tagIndex, setTagIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(false);
    const [delayed, setDelayed] = useState(false);

    const parsedLines = useMemo(() => {
        return lines.map(line => {
          return [...line.matchAll(/\$(\w+)\$(.*?)\$end\$/g)];
        });
      }, [lines]);

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
        if (lineIndex >= lines.length) 
        {
            return;
        }

        const timeout = setTimeout(() => {
            if (tagIndex === parsedLines[lineIndex].length)
            {
                setPrintingLine('');
                setCharIndex(0);
                setLineIndex((currentLineIndex) => currentLineIndex + 1);
                setDisplayedLines((currentDisplayedLines) => [...currentDisplayedLines, '']);
                
                setTagIndex(0);
            }
            else if (printingLine.includes(parsedLines[lineIndex][tagIndex][2]))
            {
                setDisplayedLines(current =>
                    current.map((line, i) =>
                      i === lineIndex ? line + printingLine : line
                    )
                );
                setPrintingLine((currentPrintingLine) => currentPrintingLine = '');
                setTagIndex((i) => i + 1);
                setCharIndex(0);
            }
            else {
                setPrintingLine((currentPrintingLine) => currentPrintingLine + parsedLines[lineIndex][tagIndex][2][charIndex]);
                setCharIndex((currentCharIndex) => currentCharIndex + 1);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [delayed, charIndex, printingLine, lineIndex, tagIndex]);

    const renderLine = (line: string, key: number) => {
        const matches = parsedLines[key];
        if (!matches || matches.length === 0) return <span key={ key } className="whitespace-pre">{ line }</span>;
    
        return matches.map((match: any, i: number) => {
                return line.includes(match[2]) && <span key={i} className={`${ParseColor(match[1])} whitespace-pre`}>
                    { match[2] }
                </span> 
            })
    };

    const renderPrintingLine = () => {
        const matches = parsedLines[lineIndex];
        if (!matches || matches.length === 0) return <span className="whitespace-pre">{ printingLine }</span>
        if (!matches[tagIndex]) return;
        return <span className={`${ParseColor(matches[tagIndex][1])} whitespace-pre`}>
                    {printingLine}
                </span>
    };

    return <>
        { displayedLines.map((line, i) => {
                return <p className={`${i === lineIndex && 'flex'}`} key={i}>
                    { renderLine(line, i) } {i === (lines.length - 1) && Cursor(true) }
                    { i == lineIndex && lineIndex < lines.length &&
                        <span className="flex"> 
                            { renderPrintingLine() }
                            { showCursor && Cursor() }  
                        </span> 
                    }
                </p>
            })
        }
    </>;
}