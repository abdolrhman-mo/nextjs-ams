import Heading from "../comman/heading";

export default function Hero() {
    return (
        <div className="w-5/6 mx-auto space-y-5">
            <Heading level={1}>Makady Solutions</Heading>
            <hr className="border-gray-500" />
            <p>
                A <span className="italic font-semibold"> web development </span>
                company specialized in creating 
                <span className="italic font-semibold"> e-commerce websites</span>.
            </p>
        </div>
    )
}