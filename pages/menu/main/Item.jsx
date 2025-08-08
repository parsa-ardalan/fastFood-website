import Image from "next/image";

export default function Item(props) {

    let links = props.link

    return (


        <div className="col-span-4 md:col-span-2">

            {/* image  */}

            <div className="h-4/6 flex items-center justify-center">

                <a href={links}>

                    <Image src={props?.image} className="h-14 w-14 md:w-20 md:h-20" alt={props?.name} />

                </a>
            </div>


            {/* name */}

            <div className="h-2/6">

                <a href={links}>
                    <h1 className="text-center text-md md:text-xl mt-2 md:mt-3 text-white hover:text-amber-400 duration-150"> {props.name} </h1>
                </a>
            </div>

        </div>
    )
}