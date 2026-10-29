'use client'

import OutroPanels from "@/components/outroPanels";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type NavigationValue = { activateOutro: (href: string) => void };
export const NavigationContext = createContext<NavigationValue>({
    activateOutro: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [transitionPhase, setTransitionPhase] = useState<"cover" | "reveal" | null>(null);
    const pathname = usePathname();

    const navigationTargetRef = useRef<string | null>(null);
    const navigationOriginRef = useRef<string | null>(null);
    const finishedPanelsRef = useRef<Set<"left" | "right">>(new Set());
    const router = useRouter();

    useEffect(() => {
        finishedPanelsRef.current.clear();
    }, [transitionPhase]);

    useEffect(() => {
        if (transitionPhase === "cover" && pathname !== navigationOriginRef.current) {
            setTransitionPhase("reveal");
        }
    }, [pathname, transitionPhase]);

    const activateOutro = (href: string) => {
        if (transitionPhase) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            router.push(href);
            return;
        }

        router.prefetch(href);
        navigationOriginRef.current = pathname;
        navigationTargetRef.current = href;
        finishedPanelsRef.current.clear();
        setTransitionPhase("cover");
    };

    const handlePanelAnimationEnd = (side: "left" | "right") => {
        if (!transitionPhase || finishedPanelsRef.current.has(side)) {
            return;
        }

        finishedPanelsRef.current.add(side);
        if (finishedPanelsRef.current.size < 2) {
            return;
        }

        finishedPanelsRef.current.clear();
        if (transitionPhase === "cover") {
            if (navigationTargetRef.current) {
                router.push(navigationTargetRef.current);
            }
            return;
        }

        navigationTargetRef.current = null;
        navigationOriginRef.current = null;
        setTransitionPhase(null);
    };

    return (
        <NavigationContext.Provider value={{ activateOutro }}>
            {transitionPhase && <OutroPanels phase={transitionPhase} onPanelAnimationEnd={handlePanelAnimationEnd} />}
            {children}
        </NavigationContext.Provider>
    );
}

export const useNavigationContext = () => useContext(NavigationContext);