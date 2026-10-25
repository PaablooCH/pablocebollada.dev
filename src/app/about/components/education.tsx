type EducationProps = {
    course: string,
    institution: string,
    period: string,
}

export default function Education({ course, institution, period }: EducationProps) {
    return (
        <article className="bg-(--color-surface) border border-(--card-border) border-l-2 border-l-(--ps1-blue) rounded-2xl flex flex-col p-4 h-fit w-80 max-w-full shrink-0 snap-center hover:scale-105 motion-reduce:hover:scale-100 transition-transform duration-300">
            <h3 className="text-(--color-text) font-bold">{course}</h3>
            <div className="flex flex-col text-(--color-text) font-semibold">
                <span>@ {institution}</span>
                <span>{period}</span>
            </div>
        </article>
    );
}
