'use client'
import { useEffect, useState } from "react"
import { setTimeout } from "timers";

export default function OutroPanels() {
    const [mounted, setMounted] = useState(false);
    const [customClass, setCustomClass] = useState('');

    useEffect(() => {
        setMounted(true);
        const t = setTimeout(() => {
            setCustomClass('unblur_backdrop');
        }, 2000);
        return () => clearTimeout(t);
    }, []);

    return <div className={`fixed top-0 left-0 w-screen h-dvw z-20 ${customClass}`}>
                <div className={`absolute top-0 left-0 w-1/2 h-full bg-white transition-transform duration-1000 ${!mounted && '-translate-x-full'}`}></div>
                <div className={`absolute top-0 left-1/2 w-1/2 h-full bg-white transition-transform duration-1000 ${!mounted && 'translate-x-full'}`}></div>
            </div>
}