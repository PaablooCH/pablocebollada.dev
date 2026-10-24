'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/libs/useReducedMotion";
import Image from "next/image";

type HeaderProps = {
    image: string,
    alt: string,
    width: number,
    height: number,
    layoutId: string,
    className?: string
}

export default function Header({ image, alt, width, height, layoutId, className = "" }: HeaderProps) {
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const blur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(10px)'], {
        clamp: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.75], {
        clamp: true,
    });

    return (
        <motion.header style={{ filter: shouldReduceMotion ? 'none' : blur }} className={`w-full h-44 grid place-items-center overflow-hidden ${className}`}>
            <motion.div layoutId={layoutId} style={{ scale: shouldReduceMotion ? 1 : scale }} className="h-full max-w-full">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="(max-width: 640px) 176px, 250px"
                    className="h-full w-auto max-w-full object-contain"
                />
            </motion.div>
        </motion.header>
    )
}
