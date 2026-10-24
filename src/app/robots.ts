import { MetadataRoute } from "next";
import { siteUrl } from "./resources/config";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${siteUrl}/sitemap.xml`,
    }
}
