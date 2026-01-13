'use client'
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
    title: string,
    description: string,
    image: string,
    imageClassName?: string,
    link: string,
    tags: string[]
}

export default function ProjectCard({ title, description, image, imageClassName, link, tags }: Props) {
    const odd = tags.length % 2;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }} className="w-2xl bg-black border border-gray-500 rounded-lg text-gray-300 p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Link href={"/projects/" + link} className="">
                <div className="flex flex-row mt-4 gap-8 justify-between">
                    <div className="flex flex-col w-2/3">
                        <h3 className="font-bold uppercase text-2xl">
                            {title}
                        </h3>
                        <p className="mt-4">
                            {description}
                        </p>
                        <div className="flex flex-row gap-12 mt-2">
                            <ul>
                                {tags.slice(0, (tags.length + odd)/2).map((item, index) => (
                                    <li key={index} className="list-disc ml-4">{item}</li>
                                ))}
                            </ul>
                            <ul>
                                {tags.slice((tags.length + odd)/2, tags.length).map((item, index) => (
                                    <li key={index} className="list-disc ml-4">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <motion.img
                        src={image}
                        alt={title}
                        layoutId={`image-${link}`}
                        width={200}
                        height={200}
                        className={`${imageClassName}`}
                        initial={false}
                    />
                </div>
            </Link>
        </motion.div>
    )
}