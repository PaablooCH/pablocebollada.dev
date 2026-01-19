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
            url: `https://${configHome.baseUrl}`,
            lastModified: new Date(),
            priority: 1.0,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configAbout.canonical}`,
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configProjects.canonical}`,
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configAxolotlEngine.canonical}`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configDeepShop.canonical}`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configLegoStarWars.canonical}`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configMegaman.canonical}`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: 'monthly',
        },
        {
            url: `https://${configPabloCebolladaDev.canonical}`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: 'monthly',
        }
    ]
}