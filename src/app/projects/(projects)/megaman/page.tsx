import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { megaman as config } from "@/app/resources/config";

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

export default function Megaman() {
    return (
        <div className="min-h-dvh">
            <Header image="/Megaman.png" alt="Megaman" width={250} height={250} layoutId={"image-megaman"}></Header>
            <h1 className="title-h1 mt-8">Megaman</h1>
            <div className="text-justify text text-lg md:text-xl mt-4">
                <p>Megaman is a single-player 2D platform game insipired by <Link href="https://www.youtube.com/watch?v=ENNRbKO_Up4"> <strong className="text-(--color-primary) cursor-pointer underline">The Goonies (1986)</strong></Link> for the NES but with the aesthetic of Megaman 7, entirely made using an in-house engine. 
                    This project is developed in <strong className="text-(--color-primary)">C++</strong> and utilizes the <strong className="text-(--color-primary)">OpenGL API</strong> for rendering 2D sprites. </p>
                                    
                <p className="mt-2">Megaman was created by a team of two people. We both determined all aspects of the game. For instance, as I mentioned, we opted to alter the game&apos;s aesthetics to give it a distinct perspective compared to the original.
                    Considering that neither of us were artists, we chose to utilize sprites from a different game, ultimately finding that Megaman 7 complemented our vision quite nicely.
                    Additionally, we introduced new mechanics and enemies to offer a more dynamic gameplay experience compared to the original.</p>

                <p className="mt-2">In the game, you&apos;ll embark on a journey through five distinct levels, with the mission of rescuing a total of six girls. In each level you will find keys that are crucial for liberating the imprisoned girls. 
                    However, to add a level of challenge, each stage is equipped with a set of diverse enemies and traps.
                    To assist you along the way, you&apos;ll encounter five unique power-ups throughout the levels granting you new abilities such as increased jumping height, enhanced speed, or additional armor, for instance.
                </p>

                <p className="mt-2">As I mentioned, this project was created by two people, which meant that I had to take on the roles of both <strong className="text-(--color-primary)">game designer</strong> and <strong className="text-(--color-primary)">level designer</strong> in addition to being a programmer. 
                    As a programmer, I was responsible for the <strong className="text-(--color-primary)">sprite animations</strong> of each character in the game. I also developed the <strong className="text-(--color-primary)">player</strong>, including their mechanics such as climbing, 
                    jumping, shooting, and the implementation of the <strong className="text-(--color-primary)">power-up system</strong>. Additionally, I created the HUD and designed some of the traps.</p>

            </div>
            <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-12">
                <Link href="https://github.com/PaablooCH/Megaman/releases/latest" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 navbar-link" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}