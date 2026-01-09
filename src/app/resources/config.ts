import { me } from "./content"

export const home = {
    baseUrl: "pablocebollada.dev",
    title: `${me.nickname}`,
    description: `This is ${me.nickname}'s personal Website`,
    author: { url: "https://github.com/PaablooCH", name: `${me.name} ${me.firstName}` }
}

export const about = {
    canonical: "pablocebollada.dev/about",
    title: `About me - ${me.nickname}`,
    description: `Meet ${me.name} ${me.firstName}, a ${me.role} from ${me.location}`
}

export const project = {
    canonical: "pablocebollada.dev/projects",
    title: `My projects - ${me.nickname}`,
    description: `Architecture and dev projects by ${me.name}`
}