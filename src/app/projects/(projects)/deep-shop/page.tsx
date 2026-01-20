import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { deepShop as config } from "@/app/resources/config";
import { FaGithubAlt, FaYoutube } from "react-icons/fa6";

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
                    <FaYoutube className="size-8 navbar-link"/>
                </Link>
                <Link href="https://github.com/PaablooCH/Deep-Shop/releases/latest" target="_blank">
                    <FaGithubAlt className="size-8 navbar-link"/>
                </Link>
            </div>
        </div>
    )
}