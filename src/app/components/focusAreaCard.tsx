'use client';

import TechTag from "@/app/projects/components/techTag";
import { useReducedMotion } from "@/libs/useReducedMotion";
import { motion } from "framer-motion";

type Props = {
    title: string;
    description: string;
    tags: string[];
};

export default function FocusAreaCard({ title, description, tags }: Props) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : undefined}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, transition: { duration: 1.2 } }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95, y: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            className="p-4 project-card"
        >
            <h3 className="text-2xl font-bold uppercase text-(--color-text)">{title}</h3>
            <p>{description}</p>
            <div className="project-tech-tags">
                {tags.map((tag) => <TechTag key={tag} name={tag} />)}
            </div>
        </motion.article>
    );
}
