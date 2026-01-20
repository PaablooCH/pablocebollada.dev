'use client';
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

type GoBackProps = {
    url: string;
}

export default function GoBack({ url }: GoBackProps) {
    const router = useRouter();

    function handleClick() {
        router.push(url);
    }

    return (
        <button onClick={handleClick} aria-label="goBack" className="cursor-pointer my-2">
            <FaChevronLeft className="size-6 stroke-2 text my-2 navbar-link"/>
        </button>
    )
}