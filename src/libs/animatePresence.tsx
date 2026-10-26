'use client'

import { usePathname } from "next/navigation";

export function MyAnimatePresence({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Let the App Router replace pages immediately; the navbar handles the exit curtain.
    return (
        <div key={pathname} className="page-transition w-full">
            {children}
        </div>
    );
}
