'use client';
import { motion, useScroll, useTransform } from "framer-motion";

type HeaderProps = {
    image: string,
    alt: string,
    width: number,
    height: number,
    layoutId: string,
    className?: string
}

export default function Header({ image, alt, width, height, layoutId, className }: HeaderProps) {
    const { scrollYProgress } = useScroll();
    const blur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(10px)'], {
        clamp: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5], {
        clamp: true,
    });

    return (
        <motion.header style={{ filter: blur }} className={`w-full h-44 grid place-items-center overflow-hidden ${className}`}>
            <motion.img
                src={image}
                alt={alt}
                width={width}
                height={height}
                layoutId={layoutId}
                style={{scale}}
            />
        </motion.header>
    )
}