'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
function GetMyTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit'
    });
}    

export default function NavBar() {
    const [dropDown, setDropDown] = useState(false);
    const [myTime, setMyTime] = useState('00:00');

    useEffect(() => {
        setMyTime(GetMyTime());
        const interval = setInterval(() => {
            setMyTime(GetMyTime());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className={`fixed bg-red-500 transition top-0 left-0 h-dvh w-screen px-10 py-4 duration-500 flex flex-col justify-between text-white z-10 ${dropDown ? 'bounce' : '-translate-y-full'}`}>
                <div className="font-extrabold text-xl text-end">
                    <span className="cursor-pointer hover:text-black" onClick={() => setDropDown(false)}>Close</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <Link href="/">
                        <h2 className="font-extrabold text-6xl hover:text-black cursor-pointer" onClick={() => setDropDown(false)}>HOME</h2>
                    </Link>
                    <Link href="/about">
                        <h2 className="font-extrabold text-6xl hover:text-black cursor-pointer" onClick={() => setDropDown(false)}>ABOUT</h2>
                    </Link>
                    <div className="flex flex-row gap-8">
                        <Link href="https://www.linkedin.com/in/pablo-cebollada-hernández/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 hover:text-black" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                        <Link href="https://github.com/PaablooCH" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-8 hover:text-black" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="h-1/4 flex flex-col">
                    <div className="flex-1"></div>
                    <div>
                        <span className="font-extrabold hover:text-black cursor-default">π</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center px-10 py-4 bg-white border-gray-300 text-gray-700
                            dark:bg-black dark:border-gray-700 dark:text-gray-300">
                <Link href="/">
                    <h1 className="font-extrabold text-xl">
                        PABLO CEBOLLADA
                    </h1>
                </Link>
                <div className="justify-self-center grid grid-rows-2 cursor-pointer" onClick={() => { setDropDown(true) }}>
                    <div className="border-b-2 border-gray-300 h-1 w-12 md:w-24"></div>
                    <div className="border-b-2 border-gray-300 h-2 w-12 md:w-24"></div>
                </div>
                <span className="justify-self-end font-extrabold text-xl tracking-wide">BCN · { myTime }</span>
            </div>
        </div>
    );
}