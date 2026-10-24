'use client'
import Link from "next/link";
import { type MouseEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import OutroPanels from "./outroPanels";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";

function getMyTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function subscribeToClock(update: () => void) {
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
}

function getServerTime() {
    return "--:--";
}

export default function NavBar() {
    const [dropDown, setDropDown] = useState(false);
    const [renderPanels, setRenderPanels] = useState(false);
    const myTime = useSyncExternalStore(subscribeToClock, getMyTime, getServerTime);
    const menuRef = useRef<HTMLDialogElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const navigationTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!dropDown || !menuRef.current) {
            return;
        }

        const menu = menuRef.current;
        const previousOverflow = document.body.style.overflow;
        const menuButton = menuButtonRef.current;
        menu.showModal();
        document.body.style.overflow = 'hidden';

        return () => {
            menu.close();
            document.body.style.overflow = previousOverflow;
            menuButton?.focus({ preventScroll: true });
        };
    }, [dropDown]);

    useEffect(() => {
        const timers = navigationTimers.current;
        return () => timers.forEach(clearTimeout);
    }, []);

    const activateOutro = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();
        navigationTimers.current.forEach(clearTimeout);
        navigationTimers.current.length = 0;
        setDropDown(false);

        if (pathname === href) {
            setRenderPanels(false);
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setRenderPanels(false);
            router.push(href);
            return;
        }

        router.prefetch(href);
        setRenderPanels(true);
        navigationTimers.current.push(
            setTimeout(() => router.push(href), 1000),
            setTimeout(() => setRenderPanels(false), 3000),
        );
    };

    return (
        <nav aria-label="Main navigation" className="relative">
            {renderPanels && <OutroPanels />}
            <dialog ref={menuRef} id="site-navigation" aria-label="Site navigation" onClose={() => setDropDown(false)} className={`navbar fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 px-5 py-4 sm:px-10 ${dropDown ? 'bounce' : ''}`}>
                <div className="flex h-full flex-col justify-between">
                    <div className="font-extrabold text-xl text-end">
                        <button type="button" className="cursor-pointer navbar-link" onClick={() => setDropDown(false)} aria-label="Close navigation menu">Close</button>
                    </div>
                    <div className="flex flex-col items-start sm:items-center gap-8 tracking-wide">
                        <Link href="/" className="font-extrabold text-4xl sm:text-6xl navbar-link" aria-current={pathname === '/' ? 'page' : undefined} onClick={(event) => activateOutro(event, '/')}>HOME</Link>
                        <Link href="/about" className="font-extrabold text-4xl sm:text-6xl navbar-link" aria-current={pathname === '/about' ? 'page' : undefined} onClick={(event) => activateOutro(event, '/about')}>ABOUT ME</Link>
                        <Link href="/projects" className="font-extrabold text-4xl sm:text-6xl navbar-link" aria-current={pathname.startsWith('/projects') ? 'page' : undefined} onClick={(event) => activateOutro(event, '/projects')}>PROJECTS</Link>

                        <div className="flex flex-row gap-8 w-full justify-center">
                            <Link href="https://www.linkedin.com/in/pablo-cebollada-hernández/" target="_blank" rel="noopener noreferrer" aria-label="Pablo Cebollada on LinkedIn" className="p-2">
                                <FaLinkedin className="size-8 navbar-link" aria-hidden="true" />
                            </Link>
                            <Link href="https://github.com/PaablooCH" target="_blank" rel="noopener noreferrer" aria-label="Pablo Cebollada on GitHub" className="p-2">
                                <FaGithubAlt className="size-8 navbar-link" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="h-1/4 flex flex-col justify-end">
                        <span className="font-extrabold navbar-link cursor-default">π</span>
                    </div>
                </div>
            </dialog>

            <div className="navbar grid grid-cols-[minmax(0,1fr)_auto] gap-4 w-full items-center px-5 py-4 sm:grid-cols-[1fr_auto_1fr] sm:px-10">
                <Link href="/" className="navbar-brand text-base sm:text-xl" onClick={(event) => activateOutro(event, '/')}>PABLO CEBOLLADA</Link>
                <button ref={menuButtonRef} type="button" className="justify-self-center grid grid-rows-2 cursor-pointer navbar-toggle p-2" onClick={() => setDropDown(true)} aria-expanded={dropDown} aria-controls="site-navigation" aria-haspopup="dialog" aria-label="Open navigation menu">
                    <span className="border-b-2 h-1 w-10 sm:w-12 md:w-24"></span>
                    <span className="border-b-2 h-2 w-10 sm:w-12 md:w-24"></span>
                </button>
                <span className="hidden justify-self-end navbar-time sm:inline">BCN · {myTime}</span>
            </div>
        </nav>
    );
}