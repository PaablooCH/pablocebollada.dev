type EducationProps = {
    course: string,
    institution: string,
    period: string,
}

export default function Education({ course, institution, period }: EducationProps) {
    return (
        <div className="bg-slate-900 border border-slate-700 border-l-2 border-l-sky-400 rounded-2xl flex flex-col p-4 h-fit min-w-68 max-w-fit snap-center hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold">{course}</span>
            <div className="flex flex-col text-white font-semibold">
                <span>@ {institution}</span>
                <span>{period}</span>
            </div>
        </div>
    );
}
