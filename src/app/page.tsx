import ConsoleTyping, { CommandLine } from "@/components/consoleTyping";
import SeparatorLine from "@/components/separatorLine";
import Image from "next/image";
import FocusAreaCard from "@/app/components/focusAreaCard";
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

const focusAreas = [
    {
        title: "Backend & Cloud",
        description: "Production Kotlin services deployed across more than 20 client environments.",
        tags: ["Kotlin", "Spring Boot", "PostgreSQL", "AWS"],
    },
    {
        title: "Web Applications",
        description: "Responsive interfaces for web platforms and geospatial tools.",
        tags: ["Vue", "Angular", "React", "TypeScript"],
    },
    {
        title: "Graphics & Games",
        description: "Rendering features and gameplay systems for C++ engines and Unity projects.",
        tags: ["C++", "OpenGL", "C#", "Unity"],
    },
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
            <section id="focus" aria-labelledby="focus-title" className="px-5 pt-8 pb-12 sm:px-10 sm:pt-12">
                <h2 id="focus-title" className="title-h2">WHAT I BUILD</h2>
                <p className="mt-3 max-w-2xl text-lg text">
                    Production software across backend systems, web applications, and graphics.
                </p>

                <div className="projects-grid mt-8">
                    {focusAreas.map((area) => (
                        <FocusAreaCard key={area.title} {...area} />
                    ))}
                </div>
            </section>
        </div>
    );
}
