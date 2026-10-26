import SeparatorLine from "@/components/separatorLine";
import Tool from "@/app/about/components/tool";
import { TbFileCv } from "react-icons/tb";
import { IoIosMail, IoIosCog } from "react-icons/io";
import { FaArrowTrendUp, FaBook } from "react-icons/fa6";
import { SiReact, SiKotlin, SiTypescript, SiTailwindcss, SiNuxtdotjs, SiVuedotjs, SiSpringboot, SiPostgresql, SiMysql, SiGit, SiPostman, SiDocker, SiCplusplus } from "react-icons/si";
import Experience from "./components/experience";
import Education from "./components/education";
import { createPageMetadata } from "@/app/resources/metadata";

import { about as config } from "@/app/resources/config";

export const metadata = createPageMetadata(config);

export default function About() {
    return (
        <div className="min-h-[calc(100dvh-66px)] px-5 pt-5 sm:px-10">
            <h1 className="title-h1">ABOUT ME</h1>
            <section id="me" className="mt-8">
                <h2 className="title-h2 hover:text-(--color-accent)">HI, I&apos;M PABLO 👋</h2>
                <div className="flex flex-col gap-4 mt-4 text-lg md:text-xl text">
                    <p>
                        I&apos;m Pablo Cebollada, a software engineer focused on building reliable web applications and backend services.
                    </p>
                    <p>
                        My work spans backend systems, frontend interfaces, databases, and cloud infrastructure. I&apos;ve also built GIS features that bring maps and security data together. Earlier in my career, I worked on C++ graphics engines, where rendering and performance shaped how I approach engineering.
                    </p>
                    <p>
                        I care about clear architecture, practical performance, and building software that teams can maintain and grow with confidence.
                    </p>
                    <div className="flex justify-center gap-8 mt-8">
                        <a href="/Pablo Cebollada - CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Pablo Cebollada's CV (PDF, new tab)" className="p-2 hover:text-(--color-accent) focus-visible:text-(--color-accent) transition-colors duration-300">
                            <TbFileCv className="size-8 ps1-icon-hover ps1-icon-hover--blue" aria-hidden="true" />
                        </a>
                        <a href="mailto:paabloo.ch@gmail.com" aria-label="Email Pablo Cebollada" className="p-2 hover:text-(--color-accent) focus-visible:text-(--color-accent) transition-colors duration-300">
                            <IoIosMail className="size-8 ps1-icon-hover ps1-icon-hover--red" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>

            <SeparatorLine />

            <section id="tools">
                    <div className="flex items-center gap-2 title-h2 hover:text-(--color-success)">
                    <h2>TOOLS </h2>
                    <IoIosCog className="size-10 shrink-0 ps1-icon-hover ps1-icon-hover--green" aria-hidden="true" />
                </div>
                
                <p className="flex flex-col gap-4 mt-4 text-lg md:text-xl text">
                    My experience includes Kotlin, Spring Boot, PostgreSQL and AWS for backend services, and Vue, Nuxt, Angular, React and TypeScript for frontend development. I also have a background in C++ graphics and C# game development. Here are some of the languages and tools I&apos;ve worked with.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 text gap-x-4 gap-y-8">
                    <Tool name="React" icon={SiReact} color="#61dafb" pulse />
                    <Tool name="Kotlin" icon={SiKotlin} color="#7f52ff" pulse dotColor="bg-(--ps1-red)" pulseColor="bg-(--ps1-red)" />
                    <Tool name="AWS" logoUrl="/aws-color.svg" />
                    <Tool name="TypeScript" icon={SiTypescript} color="#3178c6" />
                    <Tool name="Tailwind CSS" icon={SiTailwindcss} color="#06b6d4" />
                    <Tool name="Nuxt" icon={SiNuxtdotjs} color="#00dc82" />
                    <Tool name="Vue" icon={SiVuedotjs} color="#4fc08d" />
                    <Tool name="Spring Boot" icon={SiSpringboot} color="#6db33f" />
                    <Tool name="PostgreSQL" icon={SiPostgresql} color="#4169e1" />
                    <Tool name="MySQL" icon={SiMysql} color="#4479a1" />
                    <Tool name="Git" icon={SiGit} color="#f05032" />
                    <Tool name="Postman" icon={SiPostman} color="#ff6c37" />
                    <Tool name="Docker" icon={SiDocker} color="#2496ed" />
                    <Tool name="C++" icon={SiCplusplus} color="#659ad2" />
                </div>
            </section>

            <SeparatorLine />

            <section id="experience">
                <div className="flex items-center gap-2 title-h2 hover:text-(--color-secondary)">
                    <h2>EXPERIENCE </h2>
                    <FaArrowTrendUp className="size-10 shrink-0 ps1-icon-hover ps1-icon-hover--red" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm font-semibold tracking-wide text-secondary 2xl:hidden">SCROLL TO EXPLORE →</p>
                <div role="region" aria-label="Work experience" tabIndex={0} className="flex gap-6 w-full rounded-2xl mt-4 items-start overflow-x-auto snap-x snap-mandatory motion-reduce:snap-none py-4 px-2">
                    <Experience position="Software Engineer" company="Desico" period="Apr 2025–Present" description={["Built Kotlin, Spring Boot and PostgreSQL backend services for an AWS-hosted facility management platform deployed across 20+ client environments.", "Cut data-query and map-rendering latency by 60% through database optimization and thread-safe multithreaded processing.", "Built two GIS geolocation and CCTV/security visualization modules (Vue frontend, C# backend) used by all clients."]}></Experience>
                    <Experience position="Software Engineer" company="Horizons Games" period="Mar 2023–Nov 2024" description={["Developed a graphics engine for 3D scene visualization and model rendering.", "Led rendering optimization, eliminating a VRAM leak that caused several GB of growth in long-running sessions.", "Refactored engine components for thread safety and built a custom thread pool."]}></Experience>
                    <Experience position="Software Engineer" company="IThink UPC" period="Feb 2022–Feb 2023" description={["Implemented authentication with short-lived access tokens.", "Built an image compression/decompression algorithm that reduced storage and processing time by 40–70%."]}></Experience>
                    <Experience position="Software Engineer (Internship)" company="Telespazio Ibérica" period="Apr 2021–Jan 2022" description={["Developed full-stack web applications for first- and third-party clients.", "Built responsive frontends using Angular and TypeScript.", "Developed backend services using Spring Boot and Java."]}></Experience>
                </div>
            </section>

            <SeparatorLine />

            <section id="education" className="mb-10">
                <div className="flex items-center gap-2 title-h2 hover:text-(--color-primary)">
                    <h2>EDUCATION </h2>
                    <FaBook className="size-8 shrink-0 ps1-icon-hover ps1-icon-hover--blue" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm font-semibold tracking-wide text-secondary md:hidden">SCROLL TO EXPLORE →</p>
                <div role="region" aria-label="Education" tabIndex={0} className="flex gap-6 w-full rounded-2xl mt-4 items-start overflow-x-auto snap-x snap-mandatory motion-reduce:snap-none py-4 px-2">
                    <Education course="Master in Advanced Programming" institution="UPC BarcelonaTech - Talent School" period="2022 - 2023"></Education>
                    <Education course="Bachelor’s Degree in Computer Science (Software Engineering)" institution="UPC BarcelonaTech" period="2017 - 2022"></Education>
                </div>
            </section>
        </div>
    );
}
