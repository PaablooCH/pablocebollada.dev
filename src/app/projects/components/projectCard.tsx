'use client'
import { motion } from "framer-motion";
import { useReducedMotion } from "@/libs/useReducedMotion";
import Link from "next/link";
import Image from "next/image";
import TechTag from "./techTag";

type Props = {
    title: string,
    description: string,
    image: string,
    imageClassName?: string,
    link: string,
    tags: string[]
}

export default function ProjectCard({ title, description, image, imageClassName = "", link, tags }: Props) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Link href={"/projects/" + link} scroll={true}>
            <motion.div 
                initial={shouldReduceMotion ? false : { opacity: 0 }} 
                animate={shouldReduceMotion ? { opacity: 1 } : undefined}
                transition={shouldReduceMotion ? { duration: 0 } : undefined}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, transition: { duration: 0.8 } }} 
                viewport={{ once: true, amount: 0.2 }} 
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300, damping: 10 } }} 
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95, y: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }} 
                className="p-4 cursor-pointer project-card"
            >
                <div className="grid place-items-center">
                    <motion.div layoutId={`image-${link}`} className={`${imageClassName} project-card-image`}>
                        <Image
                            src={image}
                            alt={title}
                            width={200}
                            height={200}
                            sizes="200px"
                            className="h-50 w-50 object-contain"
                        />
                    </motion.div>
                </div>
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <div className="project-tech-tags">
                    {tags.map((item, index) => (
                        <TechTag key={index} name={item}></TechTag>
                    ))}
                </div>
            </motion.div>
        </Link>
    )
}
