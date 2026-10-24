import { me } from "./content"

export const siteUrl = "https://pablocebollada.dev";

export const home = {
    baseUrl: "pablocebollada.dev",
    canonical: siteUrl,
    title: `${me.pageName} | ${me.role}`,
    description: `${me.pageName}'s software engineering portfolio, featuring web applications, backend systems and C++ graphics projects.`,
    author: { url: "https://github.com/PaablooCH", name: `${me.name} ${me.firstName}` },
    keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "React", "Nuxt", "Spring Boot", "TypeScript", "Kotlin", "Tailwind CSS", "AWS", "C++"]
}

export const about = {
    canonical: `${siteUrl}/about`,
    title: `About me - ${me.pageName}`,
    description: `Meet ${me.name} ${me.firstName}, a ${me.role} from ${me.location}`
}

export const projects = {
    canonical: `${siteUrl}/projects`,
    title: `My projects - ${me.pageName}`,
    description: `Software projects by ${me.pageName}, spanning web development, graphics programming and game engines.`
}

export const axolotlEngine = {
    canonical: `${siteUrl}/projects/axolotl-engine`,
    title: `Axolotl Engine - ${me.pageName}`,
    description: "In-house game Engine developed in C++ and OpenGL for advanced 3D graphics and gameplay mechanics",
    keywords: ["C++", "OpenGL", "Game Engine", "Graphics Programming", "Deferred Shading", "3D Graphics", "Nvidia Nsight", "RenderDoc"]
}

export const deepShop = {
    canonical: `${siteUrl}/projects/deep-shop`,
    title: `Deep Shop - ${me.pageName}`,
    description: "Personal game development project in C# and Unity with modular systems including inventory, quest, dialogue and crafting systems",
    keywords: ["C#", "Unity", "Game Development", "Quest System", "Dialogue System", "UI System", "Inventory Management"]
}

export const legoStarWarsStarfall = {
    canonical: `${siteUrl}/projects/lego-star-wars-starfall-rebellion`,
    title: `Lego Star Wars: Starfall Rebellion - ${me.pageName}`,
    description: "Single-player hack-and-slash game developed with Axolotl Engine, featuring dual-character gameplay and unique Force abilities",
    keywords: ["Axolotl Engine", "C++", "Game Development", "Hack and Slash", "Character Switching", "Game Design"]
}

export const megaman = {
    canonical: `${siteUrl}/projects/megaman`,
    title: `Megaman - ${me.pageName}`,
    description: "2D platform game developed in C++ using OpenGL, inspired by The Goonies with Megaman 7 aesthetics",
    keywords: ["C++", "OpenGL", "Game Development", "2D Platformer", "Game Engine", "Sprite Rendering", "Tiled"]
}

export const pabloCebolladaDev = {
    canonical: `${siteUrl}/projects/pablocebollada-dev`,
    title: `pablocebollada.dev Portfolio - ${me.pageName}`,
    description: "Personal portfolio website built with React and Next.js showcasing technical skills and experience",
    keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development", "Portfolio", "Framer Motion"]
}
