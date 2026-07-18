import ConsoleTyping, { CommandLine } from "@/components/consoleTyping";
import SeparatorLine from "@/components/separatorLine";
import Image from "next/image";
import { Metadata } from "next";
import { home as config } from "./resources/config";

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
    openGraph: {
        title: config.title,
        description: config.description,
        url: `https://${config.baseUrl}`,
        type: 'website',
    },
    alternates: {
        canonical: `https://${config.baseUrl}`
    }
};

const introductionLines: CommandLine[] = [
    {
        cmds: [
            {
                color: 'mark',
                text: '%' 
            },
            {
                color: 'blank',
                text: ' πPablo --help' 
            }
        ]
    },
    {
        cmds: [
            {
                color: 'title',
                text: '    COMMANDS' 
            }
        ]
    },
    {
        cmds: [
            {
                color: 'blank',
                text: '        clean_code.' 
            }
        ]
    },
    {
        cmds: [
            {
                color: 'blank',
                text: '        solid_architecture.' 
            }
        ]
    },
    {
        cmds: [
            {
                color: 'blank',
                text: '        real_impact.' 
            }
        ]
    },
    {
        cmds: [
            {
                color: 'mark',
                text: '%' 
            }
        ]
    }
];

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="relative min-h-[calc(100dvh-60px)] px-5 pt-5 sm:px-10">
                <div className="font-extrabold text-4xl sm:text-7xl md:text-9xl cursor-default">
                    <div className="flex flex-wrap items-center gap-2 opacity-0" style={{animation: "appearDown 2s ease-in-out forwards", animationDelay: '3s'}}>
                        <h1 className="glow">FULL</h1>
                        <div className="border-b border-(--color-primary) w-4 sm:w-32 md:w-72 hover:border-(--color-secondary)"></div>
                        <h1 className="glow">STACK</h1>
                    </div>
                    <h1 className="pl-5 sm:pl-10 opacity-0 glow" style={{animation: "appearDown 2s ease-in-out forwards", animationDelay: '3.5s'}}>DEVELOPER</h1>
                </div>
                <div className="group relative mt-4 ml-auto block w-[85px] h-[105px] sm:absolute sm:top-25 sm:right-20 sm:mt-0 sm:w-[115px] sm:h-[140px] md:top-40 md:right-40 md:w-42 md:h-[200px]">
                    <Image
                        fill
                        className="bg-gray-300 object-cover object-[56%_60%] grayscale transition-[filter] group-hover:grayscale-0"
                        style={{animation: "slideToRight 3s ease-in-out"}}
                        src={"/profile.png"}
                        sizes="(max-width: 640px) 85px, (max-width: 768px) 115px, 168px"
                        alt="Pablo Cebollada"
                        priority
                    />
                </div>
                <div className="mt-12 sm:mt-28 md:mt-24">
                    <ConsoleTyping block={introductionLines} delay={4000}></ConsoleTyping>
                </div>
                <div className="absolute bottom-4 left-10 cursor-default font-extrabold hover:text-yellow-300">π</div>
            </section>

            <SeparatorLine />

            {/* About Section */}
            <section id="about" className="min-h-[calc(100dvh-4rem-1px)] px-10 pt-4">
                <h2 className="title-h2">A BIT ABOUT ME</h2>
                <div className="flex flex-col gap-4 mt-4 text-lg md:text-xl md:w-2/3 text">
                    <p>
                        Full-stack developer with professional experience building web applications and a strong background in system-level programming.
                    </p>
                    <p>
                        I focus on creating clean, maintainable, and scalable solutions, applying a systems-oriented mindset to modern web development.
                    </p>
                    <p>
                        In my free time, I enjoy exploring and experimenting with new technologies.
                    </p>
                </div>
                <Image className="w-full max-w-[799px] h-auto grayscale hover:grayscale-0 mt-8"
                    style={{ height: 'auto' }}
                    src={"/presentation.jpg"}
                    width={799}
                    height={533}
                    alt="Pablo Cebollada"
                    loading="eager">
                </Image>
            </section>
        </div>
    );
}
