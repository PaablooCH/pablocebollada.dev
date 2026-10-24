import SeparatorLine from "@/components/separatorLine";
import Tool from "@/app/about/components/tool";
import { TbFileCv } from "react-icons/tb";
import { IoIosMail, IoIosCog } from "react-icons/io";
import { FaArrowTrendUp, FaBook } from "react-icons/fa6";
import Experience from "./components/experience";
import Education from "./components/education";
import { Metadata } from "next";

import { about as config } from "@/app/resources/config";

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

export default function About() {
    return (
        <div className={`min-h-[calc(100dvh-60px)] px-5 pt-5 sm:px-10`}>
            <h1 className="title-h1">ABOUT ME</h1>
            <section id="me" className="mt-8">
                <h2 className="title-h2 hover:text-(--color-accent)">HI, I&apos;M PABLO 👋</h2>
                <div className="flex flex-col gap-4 mt-4 text-lg md:text-xl text">
                    <p>
                        My name is Pablo Cebollada, and I&apos;m a full-stack developer currently working on web applications, with experience designing, building, and maintaining production-ready systems.
                    </p>
                    <p>
                        I&apos;ve worked across the stack, developing user-facing interfaces, backend logic, and application infrastructure, always with a strong focus on clean code, maintainability, and performance. Before specializing in web development, I gained a strong technical foundation working with lower-level systems in C++, which shaped the way I approach architecture and problem-solving today.
                    </p>
                    <p>
                        I enjoy building well-structured applications, understanding how every layer fits together, and delivering solutions that are both robust and easy to evolve over time.
                    </p>
                    <div className="flex justify-center gap-8 mt-8">
                        <a href="/Pablo Cebollada - CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Pablo Cebollada's CV">
                            <TbFileCv className="size-8 hover:cursor-pointer hover:text-(--color-accent) transition-colors duration-300" />
                        </a>
                        <a href="mailto:paabloo.ch@gmail.com" target="_blank" aria-label="Email Pablo Cebollada">
                            <IoIosMail className="size-8 hover:cursor-pointer hover:text-(--color-accent) transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </section>

            <SeparatorLine />

            <section id="tools">
                <div className="flex items-center gap-2 title-h2 hover:text-emerald-300">
                    <h2>TOOLS </h2>
                    <IoIosCog className="size-10"></IoIosCog>
                </div>
                
                <p className="flex flex-col gap-4 mt-4 text-lg md:text-xl text">
                    My primary stack includes Nuxt, Tailwind, and TypeScript on the front end but I&apos;m learning React, and Spring with Java on the back end but I&apos;m learning Kotlin. Below, I’ve listed some of the languages and tools I’ve used—and continue to use—throughout my career.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 text gap-y-8">
                    <Tool name="React" logoUrl="https://cdn.simpleicons.org/react" logoAlt="React logo" pulse={true} dotColor="bg-sky-500" pulseColor="bg-sky-400"></Tool>
                    <Tool name="Kotlin" logoUrl="https://cdn.simpleicons.org/kotlin" logoAlt="Kotlin logo" pulse={true} dotColor="bg-purple-500" pulseColor="bg-purple-400"></Tool>
                    <Tool name="AWS" logoUrl="/aws-color.svg" logoAlt="AWS logo"></Tool>
                    <Tool name="TypeScript" logoUrl="https://cdn.simpleicons.org/typescript" logoAlt="TypeScript logo"></Tool>
                    <Tool name="Tailwind CSS" logoUrl="https://cdn.simpleicons.org/tailwindcss" logoAlt="Tailwind CSS logo"></Tool>
                    <Tool name="Nuxt" logoUrl="https://cdn.simpleicons.org/nuxt" logoAlt="Nuxt logo"></Tool>
                    <Tool name="Spring Boot" logoUrl="https://cdn.simpleicons.org/springboot" logoAlt="Spring Boot logo"></Tool>
                    <Tool name="MySQL" logoUrl="https://cdn.simpleicons.org/mysql" logoAlt="MySQL logo"></Tool>
                    <Tool name="Git" logoUrl="https://cdn.simpleicons.org/git" logoAlt="Git logo"></Tool>
                    <Tool name="Postman" logoUrl="https://cdn.simpleicons.org/postman" logoAlt="Postman logo"></Tool>
                    <Tool name="Docker" logoUrl="https://cdn.simpleicons.org/docker" logoAlt="Docker logo"></Tool>
                    <Tool name="C++" logoUrl="https://cdn.simpleicons.org/c++" logoAlt="C++ logo"></Tool>
                </div>
            </section>

            <SeparatorLine />

            <section id="experience">
                <div className="flex items-center gap-2 title-h2 hover:text-(--color-secondary)">
                    <h2>EXPERIENCE </h2>
                    <FaArrowTrendUp className="size-10"></FaArrowTrendUp>
                </div>
                <p className="mt-2 text-sm font-semibold tracking-wide text-secondary md:hidden">SWIPE TO EXPLORE →</p>
                <div className="flex gap-6 w-full rounded-2xl mt-4 items-start overflow-x-auto snap-x snap-mandatory py-4 px-2">
                    <Experience position="Software Engineer" company="Desico" period="Apr 2025–Present" description={["Built Kotlin, Spring Boot and PostgreSQL backend services for an AWS-hosted facility management platform deployed across 20+ client environments.", "Cut data-query and map-rendering latency by 60% through database optimization and thread-safe multithreaded processing.", "Built two GIS geolocation and CCTV/security visualization modules (Vue frontend, C# backend) used by all clients."]}></Experience>
                    <Experience position="Software Engineer" company="Horizons Games" period="Mar 2023–Nov 2024" description={["Developed a graphics engine for 3D scene visualization and model rendering.", "Led rendering optimization, eliminating a VRAM leak that caused several GB of growth in long-running sessions.", "Refactored engine components for thread safety and built a custom thread pool."]}></Experience>
                    <Experience position="Software Engineer" company="IThink UPC" period="Feb 2022–Feb 2023" description={["Implemented authentication with short-lived access tokens.", "Built an image compression/decompression algorithm that reduced storage and processing time by 40–70%."]}></Experience>
                    <Experience position="Software Engineer (Internship)" company="Telespazio Ibérica" period="Apr 2021–Jan 2022" description={["Developed full-stack web applications for first- and third-party clients.", "Built responsive frontends using Angular and TypeScript.", "Developed backend services using Spring Boot and Java."]}></Experience>
                </div>
            </section>

            <SeparatorLine />

            <section id="education" className="mb-10">
                <div className="flex items-center gap-2 title-h2 hover:text-sky-300">
                    <h2>EDUCATION </h2>
                    <FaBook className="size-8"></FaBook>
                </div>
                <p className="mt-2 text-sm font-semibold tracking-wide text-secondary md:hidden">SWIPE TO EXPLORE →</p>
                <div className="flex gap-6 w-full rounded-2xl mt-4 items-start overflow-x-auto snap-x snap-mandatory py-4 px-2">
                    <Education course="Master in Advanced Programming" institution="UPC BarcelonaTech - Talent School" period="2022 - 2023"></Education>
                    <Education course="Bachelor’s Degree in Computer Science (Software Engineering)" institution="UPC BarcelonaTech" period="2017 - 2022"></Education>
                </div>
            </section>
        </div>
    );
}
