import Link from "next/link";
import Header from "../components/header";
import { Metadata } from "next";
import { megaman as config } from "@/app/resources/config";
import { FaGithubAlt } from "react-icons/fa6";

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
                    <FaGithubAlt className="size-8 navbar-link"/>
                </Link>
            </div>
        </div>
    );
}