import { MetadataRoute } from "next";
import { home as configHome } from "./resources/config";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'AdsBot-Google',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            }
        ],
        sitemap: `https://${configHome.baseUrl}/sitemap.xml`,
    }
}