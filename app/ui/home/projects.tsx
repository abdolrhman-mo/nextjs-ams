import Link from "next/link";
import Project from "../projects/project";
import Heading from "../comman/heading";

export default function Projects() {
    return (
        <div className="w-5/6 mx-auto space-y-5">
            <Heading level={1}>Projects</Heading>
            <hr className="text-xl border-gray-500" />
            <Project
                title="Leopard Ecommerce Website"
                link="https://nextjs-leopard-localbrand.vercel.app/"
                techUsed={[
                    'Next Js',
                    'Redux Js for global states',
                    'Tailwind library for styles',
                    'Typescript instead of Javascript',
                ]}
            />
            <br />
            <Project
                title="Makady Ecommerce Website"
                link="https://makady-ecommerce.vercel.app/"
                techUsed={[
                    'Next Js',
                    'Redux Js for global states',
                    'Bootstrap library for layout',
                    'Sass library for styles',
                    'Typescript instead of Javascript',
                ]}
            />
        </div>
    )
}