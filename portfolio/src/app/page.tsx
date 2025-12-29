import ConsoleTyping from "@/components/consoleTyping";
import Image from "next/image";

const introductionLines = [
    '$mark$%$end$ $blank$ πPablo --help$end$',
    '$title$    COMMANDS$end$',
    '$blank$        clean_code.$end$',
    '$blank$        solid_architecture.$end$',
    '$blank$        real_impact.$end$',
    '$mark$%$end$'
]

export default function Home() {
    return (
        <div className="bg-black">
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
                <div className="mt-32 text-lg md:text-xl leading-relaxed code">
                    <ConsoleTyping lines={introductionLines} delay={4000}></ConsoleTyping>
                </div>
                <div className="absolute bottom-4 left-10 cursor-default font-extrabold hover:text-yellow-300">π</div>
            </section>
            <section id="">

            </section>
        </div>
    );
}
