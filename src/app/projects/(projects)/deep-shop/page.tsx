import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { deepShop as config } from "@/app/resources/config";

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
        title: config.title,
        description: config.description,
        url: `https://${config.canonical}`,
        type: 'website',
    },
    alternates: {
        canonical: config.canonical
    }
};

export default function DeepShop() {
    return (
        <div className="min-h-dvh">
            <Header image="/deep-shop-icon.png" alt="Deep Shop" width={250} height={250} layoutId={"image-deep-shop"}></Header>
            <h1 className="title-h1 mt-8">Deep Shop</h1>
            <div className="text-justify text text-lg md:text-xl mt-4">
                <p>Deep Shop is a <strong className="text-(--color-primary)">personal development project</strong> created entirely in <strong className="text-(--color-primary)">C#</strong> and built using <strong className="text-(--color-primary)">Unity</strong> as the <strong className="text-(--color-primary)">game engine</strong>. 
                    Throughout this project, I focus on developing <strong className="text-(--color-primary)">new systems</strong> and <strong className="text-(--color-primary)">features</strong> while strengthening my <strong className="text-(--color-primary)">C#</strong> and <strong className="text-(--color-primary)">programming skills</strong>.</p>

                <p className="mt-2">This project began as a <strong className="text-(--color-primary)">shop manager game</strong>. Initially, I developed an <strong className="text-(--color-primary)">inventory system</strong> to manage items, money, and karma. Additionally, I created a <strong className="text-(--color-primary)">sales system</strong> where 
                    products can be sold to customers, earning money, and based on the product type, either gaining good or bad karma. This experience led me to develop my next system: 
                    the ability to <strong className="text-(--color-primary)">buy products</strong> from a character. This system functions similarly to the previous one, but this time the player must choose which products they want to buy, 
                    along with their quantities and prices.</p>

                <p className="mt-2">However, at some point, I shifted away from the shop and began creating new features and systems. For example, I implemented a <strong className="text-(--color-primary)">dialogue system</strong> to interact with NPCs, 
                    a <strong className="text-(--color-primary)">crafting system</strong> to provide an alternative method for obtaining valuable items, and my latest implementation, the <strong className="text-(--color-primary)">quest system</strong> to provide tasks to the player in exchange 
                    for a reward. Additionally, I incorporated a <strong className="text-(--color-primary)">tooltip</strong> feature to provide more information to the player.</p>

                <p className="mt-2">Now, I&apos;m considering my next steps while also continuously updating my past work with the new techniques and knowledge gained from my latest endeavors.</p>

            </div>
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12">
                <Link href="https://youtu.be/kp8jPeeym2U" target="_blank">
                    <GlobeAltIcon className="size-10 navbar-link"></GlobeAltIcon>
                </Link>
                <Link href="https://github.com/PaablooCH/Deep-Shop/releases/latest" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 navbar-link" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}