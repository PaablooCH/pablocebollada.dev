import GoBack from "@/components/goBack";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="px-10">
            <GoBack url="/projects" />
            {children}
        </div>
    );
}