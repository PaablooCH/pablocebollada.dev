import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

type GoBackProps = {
    url: string;
}

export default function GoBack({ url }: GoBackProps) {
    return (
        <Link href={url} aria-label="Back to projects" className="inline-flex my-2 p-2">
            <FaChevronLeft className="size-6 stroke-2 text navbar-link ps1-icon-hover ps1-icon-hover--yellow" aria-hidden="true" />
        </Link>
    )
}
