import ConsoleTyping, { CommandLine } from "@/components/consoleTyping";
import Image from "next/image";

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
        // '$mark$%$end$ $blank$ πPablo --help$end$',
    // '$title$    COMMANDS$end$',
    // '$blank$        clean_code.$end$',
    // '$blank$        solid_architecture.$end$',
    // '$blank$        real_impact.$end$',
    // '$mark$%$end$'
]

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="relative min-h-[calc(100dvh-60px)] px-10 pt-5">
                <div className="font-extrabold text-9xl cursor-default text-gray-300">
                    <div className="flex flex-wrap items-center gap-2 opacity-0" style={{animation: "appearDown 2s ease-in-out forwards", animationDelay: '3s'}}>
                        <h2 className="hover:text-yellow-300">FULL</h2>
                        <div className="border-b border-gray-300 w-16 lg:w-72 hover:border-yellow-300"></div>
                        <h2 className="hover:text-yellow-300">STACK</h2>
                    </div>
                    <h2 className="pl-10 hover:text-yellow-300 opacity-0" style={{animation: "appearDown 2s ease-in-out forwards", animationDelay: '3.5s'}}>DEVELOPER</h2>
                </div>
                <Image className="absolute top-40 right-40 transition-transform grayscale bg-gray-300 object-[56%_60%] object-none w-[170px] h-[210px] hover:grayscale-0"
                    style={{animation: "slideToRight 3s ease-in-out"}}
                    src={"/profile.png"}
                    width={300}
                    height={200}
                    alt="Pablo Cebollada">
                </Image>
                <div className="mt-24">
                    <ConsoleTyping block={introductionLines} delay={4000}></ConsoleTyping>
                </div>
                <div className="absolute bottom-4 left-10 cursor-default font-extrabold hover:text-yellow-300">π</div>
            </section>

            <div className="h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent my-8" />

            {/* About Section */}
            <section id="about" className="min-h-[calc(100dvh-4rem-1px)] px-10 pt-4">
                <h2 className="font-bold text-5xl text-gray-300 hover:text-yellow-300">A BIT ABOUT ME</h2>
                <div className="flex flex-col gap-4 mt-4 text-lg md:text-xl w-2/3">
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
                <Image className="w-auto h-auto grayscale object-none hover:grayscale-0 mt-8"
                    src={"/presentation.jpg"}
                    width={800}
                    height={533}
                    alt="Pablo Cebollada">
                </Image>
            </section>
        </div>
    );
}
