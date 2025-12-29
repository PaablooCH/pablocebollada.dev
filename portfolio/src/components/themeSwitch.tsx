'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [isMounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!isMounted) 
    {
        return (
            <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={24}
            height={24}
            sizes="24x24"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
            />
        )
    }

    if (resolvedTheme === 'dark')
    {
        return <SunIcon className="size-6 hover:cursor-pointer" onClick={() => setTheme('light')}></SunIcon>
    }
    else if (resolvedTheme === 'light')
    {
        return <MoonIcon className="size-6 hover:cursor-pointer" onClick={() => setTheme('dark')}></MoonIcon>
    }

    return <></>;
}