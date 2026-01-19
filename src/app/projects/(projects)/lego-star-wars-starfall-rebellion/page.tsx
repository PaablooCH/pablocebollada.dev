import Link from "next/link";
import Header from "../components/header";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { legoStarWarsStarfall as config } from "@/app/resources/config";

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
            <h1 className="font-bold text-5xl text-gray-300 mt-8 uppercase hover:text-yellow-300">Lego Star Wars: Starfall Rebellion</h1>
            <div className="text-justify text-gray-300 text-lg md:text-xl mt-4">
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
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12 text-gray-300">
                <Link href="https://starfall-rebellion.vercel.app" target="_blank">
                    <GlobeAltIcon className="size-10 hover:text-yellow-300"></GlobeAltIcon>
                </Link>
                <Link href="https://github.com/Horizons-Games/Axolotl-Engine/releases/latest" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 hover:text-yellow-300" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}