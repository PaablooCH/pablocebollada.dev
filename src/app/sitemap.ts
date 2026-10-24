import { MetadataRoute } from "next";
import { 
    home as configHome, 
    about as configAbout, 
    projects as configProjects,
    axolotlEngine as configAxolotlEngine,
    deepShop as configDeepShop,
    legoStarWarsStarfall as configLegoStarWars,
    megaman as configMegaman,
    pabloCebolladaDev as configPabloCebolladaDev
} from "./resources/config";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: configHome.canonical,
            priority: 1.0,
            changeFrequency: 'monthly',
        },
        {
            url: configAbout.canonical,
            priority: 0.9,
            changeFrequency: 'monthly',
        },
        {
            url: configProjects.canonical,
            priority: 0.9,
            changeFrequency: 'monthly',
        },
        {
            url: configAxolotlEngine.canonical,
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: configDeepShop.canonical,
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: configLegoStarWars.canonical,
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: configMegaman.canonical,
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: configPabloCebolladaDev.canonical,
            priority: 0.8,
            changeFrequency: 'monthly',
        }
    ]
}
