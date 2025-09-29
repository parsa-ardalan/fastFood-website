import Image from "next/image";
import Link from "next/link";

export default function Item(props) {

    if (!props || !props.link || !props.image || !props.name) return null;
    
    let links = props.link

    return (

        <div className="col-span-4 md:col-span-2">

            {/* image  */}

            <div className="h-4/6 flex items-center justify-center">

                <Link href={links}>
                    <Image src={props?.image} className="h-14 w-14 md:w-20 md:h-20" alt={props?.name} />
                </Link>
            </div>


            {/* name */}

            <div className="h-2/6">

                <Link href={links}>
                    <h1 className="text-center text-md md:text-xl mt-2 md:mt-3 text-white hover:text-amber-400 duration-150"> {props.name} </h1>
                </Link>
            </div>

        </div>
    )
}