'use client';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

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
            <ArrowLeftIcon className="size-6 stroke-2 text"/>
        </button>
    )
}