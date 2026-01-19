import { projects as config } from "@/app/resources/config";
import { Metadata } from "next";
import ProjectCard from "./components/projectCard";

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
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

export default function Projects() {
    return (
        <div className="min-h-[calc(100dvh-60px)] px-10 pt-5">
            <h1 className="title-h1">PROJECTS</h1>
            <div className="projects-grid mt-12 pb-12">
                <ProjectCard title="pablocebollada.dev" description="Recreation of my personal website using React, Next.js, TypeScript and Tailwind CSS." image="/og-image.png" imageClassName="bg-white rounded-full p-1" link="pablocebollada-dev" tags={["Next.js", "Tailwind CSS", "Framer Motion", "Custom UI Components"]}></ProjectCard>
                <ProjectCard title="Axolotl Engine" description="In-house game Engine developed in C++ and OpenGL, for the Master in Advanced Programming for AAA Videogames’ final project." image="/Horizons.png" link="axolotl-engine" tags={["C++", "OpenGL", "Nvidia Nsight", "RenderDoc"]}></ProjectCard>
                <ProjectCard title="Lego Star Wars: Starfall Rebellion" description="Game developed in C++ using Axolotl Engine based on Lego Star Wars, with an original history. Developed during my Master in Advanced Programming for AAA Videogames." image="/starfall-rebellion.png" link="lego-star-wars-starfall-rebellion" tags={["Axolotl Engine", "C++"]}></ProjectCard>
                <ProjectCard title="Deep Shop" description="Personal Development Project to expand my C# knowledge and implementing different modular systems using Unity as Engine." image="/deep-shop-icon.png" link="deep-shop" tags={["Unity", "Quest system", "Dialogue system", "UI system", "Coroutines"]}></ProjectCard>
                <ProjectCard title="Megaman" description="2D Game developed in C++, with a in-house Engine, based on The Goonies (NES) with a Megaman 7 aesthetic." image="/Megaman.png" link="megaman" tags={["C++", "OpenGL", "Tiled"]}></ProjectCard>
            </div>
        </div>
    );
}