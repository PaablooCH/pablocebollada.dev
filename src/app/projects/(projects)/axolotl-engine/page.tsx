import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Header from "../components/header";
import Link from "next/link";
import { Metadata } from "next";
import { axolotlEngine as config } from "@/app/resources/config";

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
        title: config.title,
        description: config.description,
        url: `https://${config.canonical}`,
        type: 'website',
    },
    alternates: {
        canonical: config.canonical
    }
};

export default function AxolotlEngine() {
    return (
        <div className="min-h-dvh">
            <Header image="/Horizons.png" alt="Axolotl Engine" width={250} height={250} layoutId={"image-axolotl-engine"} className="bg-white"></Header>
            <h1 className="font-bold text-5xl text-gray-300 mt-8 uppercase hover:text-yellow-300">Axolotl Engine</h1>
            <div className="text-justify text-gray-300 text-lg md:text-xl mt-4">
                <p>The Axolotl Engine is an in-house game engine developed in <strong className="text-(--color-primary)">C++</strong> that utilizes the <strong className="text-(--color-primary)">OpenGL API</strong> for rendering. 
                    It is created by Horizons Games, an educational game development studio founded by master&apos;s students from UPC School 
                    in Barcelona, Spain. This powerful tool empowers our developers to craft games with 3D graphics, custom gameplay mechanics, 
                    and a diverse array of features to deliver unique experiences.</p>
                    
                <p className="mt-2">This is the most ambitious project I have ever worked on. It&apos;s not only ambitious because of the goal to develop an entire game engine, 
                    which is a monumental objective in itself, but also because of the collaboration with a large team, divided into different departments 
                    with varying goals and needs, all of which required coordination.</p>

                <p className="mt-2">My <strong className="text-(--color-primary)">primary role</strong> in this project was in the <strong className="text-(--color-primary)">graphics department</strong>, where I developed various 
                    features including <strong className="text-(--color-primary)">deferred shading</strong>, <strong className="text-(--color-primary)">different types of lighting</strong>, <strong className="text-(--color-primary)">reflections</strong>, <strong className="text-(--color-primary)">bloom</strong>, 
                    <strong className="text-(--color-primary)">batching</strong>, <strong className="text-(--color-primary)">tone mapping</strong>, <strong className="text-(--color-primary)">VFX mesh effects</strong> and <strong className="text-(--color-primary)">trails</strong>.
                    Additionally, as a part of the team, I reviewed pull requests in the repository to ensure <strong className="text-(--color-primary)">high quality</strong> and adherence to <strong className="text-(--color-primary)">programming best practices</strong>
                    and I also took on the responsibility of implementing some features in the engine and resolving <strong className="text-(--color-primary)">bugs</strong> and <strong className="text-(--color-primary)">memory leaks</strong>.</p>
            </div>
            <video controls width="100%" height="auto" className="mt-4">
                <source src="/workSamplersHorizons.mp4" type="video/mp4"></source>
                Video not available in this browser.
            </video>
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12 text-gray-300">
                <Link href="https://horizons-games.vercel.app/en" target="_blank">
                    <GlobeAltIcon className="size-10 hover:text-yellow-300"></GlobeAltIcon>
                </Link>
                <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases/latest" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 hover:text-yellow-300" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}