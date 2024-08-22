import Link from "next/link";
import Heading from "../comman/heading";
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/16/solid";

export default function Project({
    title,
    link,
    techUsed,
}: {
    title: string
    link: string
    techUsed: string[]
}) {
    return (
        <div className="grid gird-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            <div className="col-span-1 mb-3">
                <Link className="hover:underline capitalize group" href={link}>
                    <Heading level={4}>
                        {title} <EyeIcon className="h-5 pl-2 hidden md:group-hover:inline-block" />
                    </Heading>
                    <div className="md:hidden">
                        View Project <ArrowRightIcon className="h-4 inline-block" />
                    </div>
                </Link>
            </div>
            <div className="col-span-2">
                <p className="font-semibold">Technologies Used:</p>
                <ul>
                    {techUsed.map(li => <li key={li}>{li}</li>)}
                </ul>
            </div>
        </div>
    )
}