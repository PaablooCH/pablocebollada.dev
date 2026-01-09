import { me } from "./content"

export const home = {
    baseUrl: "pablocebollada.dev",
    title: `${me.nickname}`,
    description: `This is ${me.nickname}'s personal Website`,
    author: { url: "https://github.com/PaablooCH", name: `${me.name} ${me.firstName}` },
    keywords: ["Full Stack Developer", "Web Developer", "React", "Nuxt", "Spring Boot", "TypeScript", "Kotlin", "Tailwind CSS", "AWS", "C++"]
}

export const about = {
    canonical: "pablocebollada.dev/about",
    title: `About me - ${me.nickname}`,
    description: `Meet ${me.name} ${me.firstName}, a ${me.role} from ${me.location}`
}

export const projects = {
    canonical: "pablocebollada.dev/projects",
    title: `My projects - ${me.nickname}`,
    description: `Architecture and dev projects by ${me.name}`
}