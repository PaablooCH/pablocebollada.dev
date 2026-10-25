import Image from "next/image"
import type { IconType } from "react-icons";

type ToolProps = {
    name: string;
    pulse?: boolean;
    dotColor?: string;
    pulseColor?: string;
} & (
    | { icon: IconType; color: string; logoUrl?: never }
    | { logoUrl: string; icon?: never; color?: never }
);

export default function Tool({ name, logoUrl, icon: Icon, color, pulse, dotColor = "bg-(--ps1-blue)", pulseColor = "bg-(--ps1-blue)" }: ToolProps) {
    return (
        <div className="group flex min-w-0 items-center gap-3">
            {Icon ? (
                <span className="relative grid size-5 shrink-0 place-items-center">
                    <Icon className="size-5 md:grayscale group-hover:grayscale-0" color={color} aria-hidden="true" />
                    {pulse && (
                        <span aria-hidden="true" className="absolute -right-1 -top-1 flex size-3">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full motion-reduce:animate-none ${pulseColor} opacity-75`} />
                            <span className={`relative inline-flex size-3 rounded-full ${dotColor}`} />
                        </span>
                    )}
                </span>
            ) : logoUrl && <Image height={20} width={20} src={logoUrl} alt="" className="shrink-0 md:grayscale group-hover:grayscale-0" />}
            <p className="md:grayscale group-hover:grayscale-0">{name}</p>
        </div>
    );
}
