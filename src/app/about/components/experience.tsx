type ExperienceProps = {
    position: string,
    company: string,
    period: string,
    description: string[],
}

export default function Experience({ position, company, period, description }: ExperienceProps) {
    return (
        <article className="bg-(--color-surface) border border-(--card-border) border-l-2 border-l-(--ps1-red) rounded-2xl flex flex-col p-4 h-fit w-80 max-w-full shrink-0 snap-center hover:scale-105 motion-reduce:hover:scale-100 transition-transform duration-300">
            <h3 className="text-(--color-text) font-bold">{position}</h3>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-(--color-text) font-semibold">
                <span>@ {company}</span>
                <span className="whitespace-nowrap">{period}</span>
            </div>
            <ul className="mt-2">
                {description.map((item) => (
                    <li key={item} className="text-(--color-text) text-sm leading-relaxed list-disc ml-4">{item}</li>
                ))}
            </ul>
        </article>
    );
}
