import type { Metadata } from "next";
import { home } from "./config";

type PageMetadataConfig = {
    title: string;
    description: string;
    canonical: string;
    keywords?: string[];
};

export function createPageMetadata(config: PageMetadataConfig): Metadata {
    const image = {
        url: "/og-image.png",
        width: 300,
        height: 300,
        alt: `${home.title}'s portfolio logo`,
    };

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords ?? home.keywords,
        alternates: { canonical: config.canonical },
        openGraph: {
            title: config.title,
            description: config.description,
            url: config.canonical,
            siteName: home.title,
            images: [image],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary",
            title: config.title,
            description: config.description,
            images: [{ url: image.url, alt: image.alt }],
        },
    };
}
