import { MetadataRoute } from "next";
import { home as configHome, about as configAbout, projects as configProjects } from "./resources/config";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://${configHome.baseUrl}`,
            lastModified: new Date(),
        },
        {
            url: `https://${configAbout.canonical}`,
            lastModified: new Date(),
        },
        {
            url: `https://${configProjects.canonical}`,
            lastModified: new Date(),
        }
    ]
}