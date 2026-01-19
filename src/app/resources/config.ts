import { me } from "./content"

export const home = {
    baseUrl: "pablocebollada.dev",
    title: `${me.pageName}`,
    description: `This is ${me.pageName}'s personal Website`,
    author: { url: "https://github.com/PaablooCH", name: `${me.name} ${me.firstName}` },
    keywords: ["Full Stack Developer", "Web Developer", "React", "Nuxt", "Spring Boot", "TypeScript", "Kotlin", "Tailwind CSS", "AWS", "C++"]
}

export const about = {
    canonical: "pablocebollada.dev/about",
    title: `About me - ${me.pageName}`,
    description: `Meet ${me.name} ${me.firstName}, a ${me.role} from ${me.location}`
}

export const projects = {
    canonical: "pablocebollada.dev/projects",
    title: `My projects - ${me.pageName}`,
    description: `Architecture and dev projects by ${me.name}`
}

export const axolotlEngine = {
    canonical: "pablocebollada.dev/projects/axolotl-engine",
    title: `Axolotl Engine - ${me.pageName}`,
    description: "In-house game Engine developed in C++ and OpenGL for advanced 3D graphics and gameplay mechanics",
    keywords: ["C++", "OpenGL", "Game Engine", "Graphics Programming", "Deferred Shading", "3D Graphics", "Nvidia Nsight", "RenderDoc"]
}

export const deepShop = {
    canonical: "pablocebollada.dev/projects/deep-shop",
    title: `Deep Shop - ${me.pageName}`,
    description: "Personal game development project in C# and Unity with modular systems including inventory, quest, dialogue and crafting systems",
    keywords: ["C#", "Unity", "Game Development", "Quest System", "Dialogue System", "UI System", "Inventory Management"]
}

export const legoStarWarsStarfall = {
    canonical: "pablocebollada.dev/projects/lego-star-wars-starfall-rebellion",
    title: `Lego Star Wars: Starfall Rebellion - ${me.pageName}`,
    description: "Single-player hack-and-slash game developed with Axolotl Engine, featuring dual-character gameplay and unique Force abilities",
    keywords: ["Axolotl Engine", "C++", "Game Development", "Hack and Slash", "Character Switching", "Game Design"]
}

export const megaman = {
    canonical: "pablocebollada.dev/projects/megaman",
    title: `Megaman - ${me.pageName}`,
    description: "2D platform game developed in C++ using OpenGL, inspired by The Goonies with Megaman 7 aesthetics",
    keywords: ["C++", "OpenGL", "Game Development", "2D Platformer", "Game Engine", "Sprite Rendering", "Tiled"]
}

export const pabloCebolladaDev = {
    canonical: "pablocebollada.dev/projects/pablocebollada-dev",
    title: `pablocebollada.dev Portfolio - ${me.pageName}`,
    description: "Personal portfolio website built with React and Next.js showcasing technical skills and experience",
    keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development", "Portfolio", "Framer Motion"]
}