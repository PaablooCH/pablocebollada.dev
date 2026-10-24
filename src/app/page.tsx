import ConsoleTyping, { CommandLine } from "@/components/consoleTyping";
import SeparatorLine from "@/components/separatorLine";
import Image from "next/image";
import { createPageMetadata } from "./resources/metadata";
import { home as config } from "./resources/config";

export const metadata = createPageMetadata(config);

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
    }
];

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="relative min-h-[calc(100dvh-66px)] px-5 pt-5 pb-16 sm:px-10">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:gap-4">
                    <h1 aria-label="Software engineer" className="min-w-0 w-full font-extrabold text-[clamp(1.5rem,8vw,8rem)] leading-[1.05] cursor-default">
                        <span className="block opacity-0 glow" style={{animation: "appearDown 1s ease-in-out forwards", animationDelay: '0.15s'}}>SOFTWARE</span>
                        <span className="block pl-5 sm:pl-10 opacity-0 glow" style={{animation: "appearDown 1s ease-in-out forwards", animationDelay: '0.35s'}}>ENGINEER</span>
                    </h1>
                    <div className="group relative block h-[90px] w-[72px] shrink-0 sm:h-[140px] sm:w-[115px] md:h-[200px] md:w-42">
                        <Image
                            fill
                            className="bg-gray-300 object-cover object-[56%_60%] grayscale transition-[filter] group-hover:grayscale-0"
                            style={{animation: "slideToRight 1.1s ease-in-out"}}
                            src="/profile.png"
                            sizes="(max-width: 639px) 72px, (max-width: 767px) 115px, 168px"
                            alt="Pablo Cebollada"
                            priority
                        />
                    </div>
                </div>
                <div className="mt-12 sm:mt-28 md:mt-24">
                    <ConsoleTyping block={introductionLines} delay={1000}></ConsoleTyping>
                </div>
                <div className="absolute bottom-4 left-10 cursor-default font-extrabold hover:text-yellow-300">π</div>
            </section>

            <SeparatorLine />

            {/* About Section */}
            <section id="about" className="min-h-[calc(100dvh-4rem-1px)] px-5 pt-4 pb-8 sm:px-10">
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
                    sizes="(max-width: 879px) calc(100vw - 40px), 799px"
                    alt="Pablo Cebollada"
                    loading="lazy">
                </Image>
            </section>
        </div>
    );
}
