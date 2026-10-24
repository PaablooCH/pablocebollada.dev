'use client';

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(update: () => void) {
    const media = window.matchMedia(query);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
}

function getSnapshot() {
    return window.matchMedia(query).matches;
}

function getServerSnapshot() {
    return false;
}

export function useReducedMotion() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
