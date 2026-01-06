import Image from "next/image"

type ToolProps = {
    name: string,
    logoUrl: string,
    logoAlt: string,
    pulse?: boolean,
    dotColor?: string,
    pulseColor?: string,
}

export default function Tool({name, logoUrl, logoAlt, pulse, dotColor, pulseColor}: ToolProps) {
    return (
        <div className="flex items-center gap-4 grayscale hover:grayscale-0">
            <div className="relative">
                {pulse && <span className="absolute -right-2 -top-2 flex size-3 z-10">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${pulseColor} opacity-75`}></span>
                    <span className={`relative inline-flex size-3 rounded-full ${dotColor}`}></span>
                </span>}
                <Image height="20" width="20" src={logoUrl} alt={logoAlt} unoptimized />
            </div>
            <p>{name}</p>
        </div>
    );
}