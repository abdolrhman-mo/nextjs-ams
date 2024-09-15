import Link from "next/link";
import Heading from "../comman/heading";
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/16/solid";

export default function Project({
  title,
  link,
  frontTechUsed,
  backTechUsed,
}: {
  title: string;
  link: string;
  frontTechUsed: string[];
  backTechUsed: string[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="col-span-1 mb-4 md:mb-0">
        <Link className="hover:underline group" href={link}>
          <Heading level={4} className="flex items-center text-teal-600">
            {title}
            <EyeIcon className="h-5 pl-2 hidden md:group-hover:inline-block text-teal-600 transition-opacity duration-200 ease-in-out" />
          </Heading>
          <div className="mt-2 md:hidden text-teal-600">
            View Project <ArrowRightIcon className="h-4 inline-block" />
          </div>
        </Link>
      </div>
      <div className="col-span-1">
        <p className="font-semibold text-gray-800 mb-2">Backend Technologies Used:</p>
        <ul className="space-y-1">
          {backTechUsed.map((li) => (
            <li
              key={li}
              className="flex items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
            >
              <span className="inline-block w-2.5 h-2.5 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-800">{li}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1">
        <p className="font-semibold text-gray-800 mb-2">Frontend Technologies Used:</p>
        <ul className="space-y-1">
          {frontTechUsed.map((li) => (
            <li
              key={li}
              className="flex items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
            >
              <span className="inline-block w-2.5 h-2.5 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-800">{li}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
