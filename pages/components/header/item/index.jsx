import Link from "next/link";

export default function Item(props) {

    if (!props.user) return null;


    return (

        <div className="hidden md:flex md:items-center md:justify-center md:col-span-1">

            <h1 className="md:text-lg select-none duration-300 hover:text-amber-400">
                <Link href={props?.link}> {props?.innerHTML} </Link>
            </h1>

        </div>
    )
}