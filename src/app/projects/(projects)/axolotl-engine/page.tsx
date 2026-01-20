import { FaGlobe } from "react-icons/fa6";
import Header from "../components/header";
import Link from "next/link";
import { Metadata } from "next";
import { axolotlEngine as config } from "@/app/resources/config";
import { FaGithubAlt } from "react-icons/fa6";

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
            <h1 className="title-h1 mt-8">Axolotl Engine</h1>
            <div className="text-justify text text-lg md:text-xl mt-4">
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
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12">
                <Link href="https://horizons-games.vercel.app/en" target="_blank">
                    <FaGlobe className="size-7 navbar-link"/>
                </Link>
                <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases/latest" target="_blank">
                    <FaGithubAlt className="size-8 navbar-link" />
                </Link>
            </div>
        </div>
    )
}