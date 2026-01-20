import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { legoStarWarsStarfall as config } from "@/app/resources/config";
import { FaGithubAlt, FaGlobe } from "react-icons/fa6";

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

export default function LegoStarWarsStarfallRebellion() {
    return (
        <div className="min-h-dvh">
            <Header image="/starfall-rebellion.png" alt="Lego Star Wars: Starfall Rebellion" width={250} height={250} layoutId={"image-lego-star-wars-starfall-rebellion"}></Header>
            <h1 className="title-h1 mt-8">Lego Star Wars: Starfall Rebellion</h1>
            <div className="text-justify text text-lg md:text-xl mt-4">
                <p>Starfall Rebellion is a single-player hack-and-slash game insipired by Lego Star Wars, entirely made using our in-house engine, 
                    <Link href="/projects/axolotl-engine"> <strong className="text-(--color-primary) cursor-pointer underline">Axolotl Engine</strong></Link>.</p>

                <p className="mt-2">In it, you&apos;ll take control of Bix, a renegade rebel who possesses the Force, and Allura, an ex-convict with exceptional hacking abilities. Together, you&apos;ll embark on a journey across space 
                    in an attempt to reach the organization that is exerting control over their hometown and put an end to their tyranny. 
                    However, the outcome may not unfold as you expect.</p>
                                        
                <p className="mt-2">Battle your way through the diferent stages, switch between the two characters, and experience different gameplay with each of them. 
                    Bix excels at close distances but may struggle against ranged enemies, while Allura provides a safe ranged option but has lower health.
                    Utilize the unique abilities of each character to complete the levels. With the power of the force, 
                    Bix can move obstacles that obstruct his way. On the other hand, Allura can hack the enemies&apos; systems and open doors to complete the objectives. 
                    Learn more about the situation of your hometown 
                    and ultimately put an end to the tyranny that is affecting your world.</p>

                <p className="mt-2">In this project, I developed the  <strong className="text-(--color-primary)">power-up system</strong>, 
                    an <strong className="text-(--color-primary)">visual effect</strong> class (e.g., for when the player is being hit or a fade out when he dies), and assisted in <strong>bug resolution</strong>.</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12">
                <Link href="https://starfall-rebellion.vercel.app" target="_blank">
                    <FaGlobe className="size-7 navbar-link"></FaGlobe>
                </Link>
                <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases/latest" target="_blank">
                    <FaGithubAlt className="size-8 navbar-link"/>
                </Link>
            </div>
        </div>
    )
}