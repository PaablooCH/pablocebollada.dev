'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import OutroPanels from "./outroPanels";
import { setTimeout } from "timers";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";

function GetMyTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit'
    });
}    

export default function NavBar() {
    const [dropDown, setDropDown] = useState(false);
    const [myTime, setMyTime] = useState(GetMyTime());
    const [renderPanels, setRenderPanels] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const interval = setInterval(() => {
            setMyTime(GetMyTime());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const activateOutro = (href: string) => {
        const remainSamePage = pathname === href;
        if (remainSamePage) 
        {
            setDropDown(false);
        }
        else {
            router.prefetch(href);
            setRenderPanels(true);
            
            setTimeout(() => { 
                setDropDown(false);
                router.push(href);
            }, 1000);
            
            setTimeout(() => { 
                setRenderPanels(false);
            }, 3000);
        }
    }

    return (
        <nav className="relative">
            {renderPanels && <OutroPanels></OutroPanels>}
            <div className={`navbar top-0 left-0 h-dvh w-screen px-10 py-4 duration-500 flex flex-col justify-between z-10 ${dropDown ? 'bounce fixed' : '-translate-y-full absolute'}`}>
                <div className="font-extrabold text-xl text-end">
                    <span className="cursor-pointer navbar-link" onClick={() => setDropDown(false)}>Close</span>
                </div>
                <div className="flex flex-col items-start sm:items-center gap-8 tracking-wide">
                    <h2 className="font-extrabold text-6xl navbar-link cursor-pointer" onClick={() => activateOutro("/")}>HOME</h2>
                    <h2 className="font-extrabold text-6xl navbar-link cursor-pointer" onClick={() => activateOutro("/about")}>ABOUT ME</h2>
                    <h2 className="font-extrabold text-6xl navbar-link cursor-pointer" onClick={() => activateOutro("/projects")}>PROJECTS</h2>

                    <div className="flex flex-row gap-8 w-full justify-center">
                        <Link href="https://www.linkedin.com/in/pablo-cebollada-hernández/" target="_blank">
                            <FaLinkedin className="size-8 navbar-link"/>
                        </Link>
                        <Link href="https://github.com/PaablooCH" target="_blank">
                            <FaGithubAlt className="size-8 navbar-link"/>
                        </Link>
                    </div>
                </div>
                <div className="h-1/4 flex flex-col">
                    <div className="flex-1"></div>
                    <div>
                        <span className="font-extrabold navbar-link cursor-default">π</span>
                    </div>
                </div>
            </div>

            <div className="navbar grid grid-cols-[1fr_auto_1fr] w-full items-center px-10 py-4">
                <h3>
                    <span className="cursor-pointer navbar-brand" onClick={() => activateOutro("/")}>PABLO CEBOLLADA</span>
                </h3>
                <div className="justify-self-center grid grid-rows-2 cursor-pointer navbar-toggle" onClick={() => { setDropDown(true) }}>
                    <div className="border-b-2 h-1 w-12 md:w-24"></div>
                    <div className="border-b-2 h-2 w-12 md:w-24"></div>
                </div>
                <span className="justify-self-end navbar-time font-extrabold">BCN · { myTime }</span>
            </div>
        </nav>
    );
}