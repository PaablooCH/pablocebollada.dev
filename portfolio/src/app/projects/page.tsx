import ConsoleTyping, { CommandLine } from "@/components/consoleTyping";

const introductionLines: CommandLine[] = [
    {
        cmds: [
            {
                color: 'mark',
                text: 'W' 
            },
            {
                color: 'title',
                text: 'O' 
            },
            {
                color: 'entry',
                text: 'R' 
            },
            {
                color: 'blank',
                text: 'K' 
            },
            {
                color: 'mark',
                text: 'I' 
            },
            {
                color: 'title',
                text: 'N' 
            },
            {
                color: 'entry',
                text: 'G' 
            },
            {
                color: 'blank',
                text: ' O' 
            },
            {
                color: 'mark',
                text: 'N' 
            },
            {
                color: 'title',
                text: ' I' 
            },
            {
                color: 'entry',
                text: 'T' 
            },
            {
                color: 'blank',
                text: '.' 
            },
            {
                color: 'mark',
                text: '.' 
            },
            {
                color: 'title',
                text: '.' 
            },
            {
                color: 'entry',
                text: '.' 
            },
            {
                color: 'blank',
                text: '.' 
            },
        ]
    }
];

export default function Projects() {
    return (
        <div className="min-h-[calc(100dvh-60px)] px-10 pt-5">
            <h2 className="font-bold text-5xl text-gray-300 hover:text-yellow-300">PROJECTS</h2>
            <ConsoleTyping block={introductionLines} delay={2000}></ConsoleTyping>
        </div>
    );
}