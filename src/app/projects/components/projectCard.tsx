'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import TechTag from "./techTag";

type Props = {
    title: string,
    description: string,
    image: string,
    imageClassName?: string,
    link: string,
    tags: string[]
}

export default function ProjectCard({ title, description, image, imageClassName, link, tags }: Props) {
    return (
        <Link href={"/projects/" + link} scroll={true}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1} }} viewport={{ once: true }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95, y: 1}} transition={{ type: "spring", ease: "easeOut" }} className="text-gray-300 p-4 cursor-pointer project-card">
                <div className="grid place-items-center">
                    <div className={`${imageClassName} project-card-image`}>
                        <motion.img
                            src={image}
                            alt={title}
                            layoutId={`image-${link}`}
                            className="aspect-square w-50"
                        />
                    </div>
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