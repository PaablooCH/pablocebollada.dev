'use client'
import Link from "next/link";
import { type AnimationEvent, type MouseEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";
import { useNavigationContext } from "@/libs/navigationProvider";

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
    const [menuClosing, setMenuClosing] = useState(false);
    const myTime = useSyncExternalStore(subscribeToClock, getMyTime, getServerTime);
    const menuRef = useRef<HTMLDialogElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    
    const { activateOutro } = useNavigationContext();

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

    const closeMenu = () => {
        if (!dropDown || menuClosing) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDropDown(false);
            setMenuClosing(false);
            return;
        }

        setMenuClosing(true);
    };

    const handleMenuAnimationEnd = (event: AnimationEvent<HTMLDialogElement>) => {
        if (event.animationName !== "navbar-menu-exit") {
            return;
        }

        setMenuClosing(false);
        setDropDown(false);
    };

    const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();
        if (pathname === href) {
            closeMenu();
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setMenuClosing(false);
            setDropDown(false);
            activateOutro(href);
            return;
        }
        
        closeMenu();
        activateOutro(href);
    };

    return (
        <nav aria-label="Main navigation" className="relative">
            <dialog ref={menuRef} id="site-navigation" aria-label="Site navigation" onClose={() => { setDropDown(false); setMenuClosing(false); }} onAnimationEnd={handleMenuAnimationEnd} className={`navbar fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 px-5 py-4 sm:px-10 ${menuClosing ? 'navbar-menu-exit' : dropDown ? 'navbar-menu-enter' : ''}`}>
                <div className="flex h-full flex-col justify-between">
                    <div className="font-extrabold text-xl text-end">
                        <button type="button" className="cursor-pointer navbar-link menu-link menu-link--yellow" onClick={closeMenu} aria-label="Close navigation menu">Close</button>
                    </div>
                    <div className="flex flex-col items-start sm:items-center gap-8 tracking-wide">
                        <Link href="/" className="font-extrabold text-4xl sm:text-6xl navbar-link menu-link menu-link--blue" aria-current={pathname === '/' ? 'page' : undefined} onClick={(event) => handleNavigation(event, '/')}>HOME</Link>
                        <Link href="/about" className="font-extrabold text-4xl sm:text-6xl navbar-link menu-link menu-link--red" aria-current={pathname === '/about' ? 'page' : undefined} onClick={(event) => handleNavigation(event, '/about')}>ABOUT ME</Link>
                        <Link href="/projects" className="font-extrabold text-4xl sm:text-6xl navbar-link menu-link menu-link--green" aria-current={pathname.startsWith('/projects') ? 'page' : undefined} onClick={(event) => handleNavigation(event, '/projects')}>PROJECTS</Link>

                        <div className="flex flex-row gap-8 w-full justify-center">
                            <Link href="https://www.linkedin.com/in/pablo-cebollada-hernández/" target="_blank" rel="noopener noreferrer" aria-label="Pablo Cebollada on LinkedIn" className="p-2">
                                <FaLinkedin className="size-8 ps1-icon-hover ps1-icon-hover--blue" aria-hidden="true" />
                            </Link>
                            <Link href="https://github.com/PaablooCH" target="_blank" rel="noopener noreferrer" aria-label="Pablo Cebollada on GitHub" className="p-2">
                                <FaGithubAlt className="size-8 ps1-icon-hover ps1-icon-hover--red" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="h-1/4 flex flex-col justify-end">
                        <span className="font-extrabold navbar-link cursor-default">π</span>
                    </div>
                </div>
            </dialog>

            <div className="navbar grid grid-cols-[minmax(0,1fr)_auto] gap-4 w-full items-center px-5 py-4 sm:grid-cols-[1fr_auto_1fr] sm:px-10">
                <Link href="/" className="navbar-brand text-base sm:text-xl" onClick={(event) => handleNavigation(event, '/')}>PABLO CEBOLLADA</Link>
                <button ref={menuButtonRef} type="button" className="justify-self-center grid grid-rows-2 cursor-pointer navbar-toggle group p-2" onClick={() => { setMenuClosing(false); setDropDown(true); }} aria-expanded={dropDown} aria-controls="site-navigation" aria-haspopup="dialog" aria-label="Open navigation menu">
                    <span className="border-b-2 h-1 w-10 sm:w-12 md:w-24 group-hover:border-(--ps1-blue) group-focus-visible:border-(--ps1-blue)"></span>
                    <span className="border-b-2 h-2 w-10 sm:w-12 md:w-24 group-hover:border-(--ps1-red) group-focus-visible:border-(--ps1-red)"></span>
                </button>
                <span className="hidden justify-self-end navbar-time sm:inline">BCN · {myTime}</span>
            </div>
        </nav>
    );
}
