import Link from "next/link";
import Project from "../projects/project";
import Heading from "../comman/heading";

export default function Projects() {
    return (
        <div className="w-5/6 mx-auto space-y-5">
            <Heading level={1} className="w-fit mx-auto">Projects</Heading>
            <hr className="border-t-2 border-gray-200 my-4 mx-auto w-16" />
            <Project
                title="Leopard Ecommerce Website"
                link="https://nextjs-leopard-localbrand.vercel.app/"
                frontTechUsed={[
                  'Next Js',
                  'Redux Js for global states',
                  'Tailwind library for styles',
                  'Typescript instead of Javascript',
                ]}
                backTechUsed={[
                  'Django',
                  'Django REST Framework (DRF) for building RESTful APIs',
                  'PostgreSQL for database management',
                  'JWT for user authentication',
                  'Deployed on PythonAnywhere',
                ]}
            />
            <br />
            <Project
                title="Ecommerce Website"
                link="https://makady-ecommerce.vercel.app/"
                frontTechUsed={[
                  'Next Js',
                  'Redux Js for global states',
                  'Bootstrap library for layout',
                  'Sass library for styles',
                  'Typescript instead of Javascript',
                ]}
                backTechUsed={[
                  'Django',
                  'Django REST Framework (DRF) for building RESTful APIs',
                  'PostgreSQL for database management',
                  'JWT for user authentication',
                  'Deployed on PythonAnywhere',
                ]}
            />
        </div>
    )
}