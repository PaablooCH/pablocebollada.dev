import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { pabloCebolladaDev as config } from "@/app/resources/config";
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

export default function PabloCebolladaDev() {
    return (
        <div className="min-h-dvh">
            <Header image="/og-image.png" alt="pablocebollada.dev" width={300} height={300} layoutId={"image-pablocebollada-dev"} className="bg-white"></Header>
            <h1 className="title-h1 mt-8">pablocebollada.dev</h1>
            <div className="text-justify text text-lg md:text-xl mt-4">
                <p>
                    This portfolio is a <strong className="text-(--color-primary)">personal web project</strong> built with 
                    <strong className="text-(--color-primary)"> React</strong> and 
                    <strong className="text-(--color-primary)"> Next.js</strong>, designed to showcase my experience, projects, 
                    and technical skills as a developer. The main focus of the project is to deliver a 
                    <strong className="text-(--color-primary)"> clean, performant, and visually polished experience</strong>, 
                    while maintaining a scalable and maintainable codebase.
                </p>

                <p className="mt-2">
                    Rather than relying on heavy UI libraries, I built most of the interface using 
                    <strong className="text-(--color-primary)"> custom reusable components</strong>, styled with 
                    <strong className="text-(--color-primary)"> Tailwind CSS</strong> and enhanced with 
                    <strong className="text-(--color-primary)"> Framer Motion</strong> to create subtle, meaningful animations 
                    and smooth transitions that improve the overall user experience.
                </p>

                <p className="mt-2">
                    From a technical perspective, I paid special attention to 
                    <strong className="text-(--color-primary)"> performance</strong>, 
                    <strong className="text-(--color-primary)"> SEO</strong>, and 
                    <strong className="text-(--color-primary)"> accessibility</strong>, 
                    implementing features such as dynamic metadata, Open Graph configuration, responsive images, 
                    and optimized layouts for different screen sizes. The project follows 
                    <strong className="text-(--color-primary)"> modern frontend best practices</strong>, with a strong emphasis 
                    on readability, scalability, and long-term maintainability.
                </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12">
                <Link href="https://github.com/PaablooCH/pablocebollada.dev" target="_blank">
                    <FaGithubAlt className="size-8 navbar-link"/>
                </Link>
            </div>

        </div>
    )
}