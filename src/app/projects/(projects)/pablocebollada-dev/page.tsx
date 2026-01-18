import Link from "next/link";
import Header from "../components/header";

export default function PabloCebolladaDev() {
    return (
        <div className="min-h-dvh">
            <Header image="/og-image.png" alt="pablocebollada.dev" width={300} height={300} layoutId={"image-pablocebollada-dev"} className="bg-white"></Header>
            <h1 className="font-bold text-5xl text-gray-300 mt-8 uppercase hover:text-yellow-300">pablocebollada.dev</h1>
            <div className="text-justify text-gray-300 text-lg md:text-xl mt-4">
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
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12 text-gray-300">
                <Link href="https://github.com/PaablooCH/pablocebollada.dev" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 hover:text-yellow-300" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </Link>
            </div>

        </div>
    )
}