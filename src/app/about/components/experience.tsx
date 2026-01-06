type ExperienceProps = {
    position: string,
    company: string,
    period: string,
    description: string[],
}

export default function Experience({ position, company, period, description }: ExperienceProps) {
    return (
        <div className="bg-red-500 rounded-2xl flex flex-col p-4 h-fit min-w-68 max-w-fit snap-center hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold">{position}</span>
            <div className="flex justify-between text-white font-semibold">
                <span>@ {company}</span>
                <span>{period}</span>
            </div>
            <ul className="mt-2">
                {description.map((item, index) => (
                    <li key={index} className="text-white text-sm list-disc ml-4">{item}</li>
                ))}
            </ul>
        </div>
    );
}