import Link from "next/link";

export default function Item(props) {

    return (

        <div className="hidden md:flex md:items-center md:justify-center md:col-span-1">

            <h1 className="md:text-lg select-none duration-300 hover:text-amber-400">
             <a href={props?.link}> {props?.innerHTML} </a>
            </h1>

        </div>
    )
}