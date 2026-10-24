'use client'
import { useEffect, useState } from "react"

export default function OutroPanels() {
    const [customClass, setCustomClass] = useState('');

    useEffect(() => {
        const t = setTimeout(() => {
            setCustomClass('unblur_backdrop');
        }, 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div aria-hidden="true" className={`fixed top-0 left-0 w-screen h-dvh z-20 ${customClass}`}>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-950 animate_slide_in_left"></div>
            <div className="absolute top-0 left-1/2 w-1/2 h-full bg-slate-950 animate_slide_in_right"></div>
        </div>
    );
}
