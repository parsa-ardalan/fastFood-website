import Image from "next/image"
import Link from "next/link"

export default function Item(props) {

    return (

        <div className="grid grid-cols-5 col-span-6 md:col-span-3 border border-white rounded-2xl h-32 w-full backdrop-blur-md backdrop-brightness-75">

            <div className="col-span-2 py-2.5 px-2.5 h-full">

                <Image
                    src={props?.image}
                    alt={props?.name}
                    width={300}
                    height={200}
                    className="border rounded-xl w-full h-full"
                />
            </div>

            <div className="col-span-3">

                <h1 className="text-white w-full text-xl mt-4 ml-1"> {props?.name} </h1>

                <p className="text-gray-200 text-sm md:text-lg mt-1 md:mt-3"> {props?.about} </p>


                <div className="w-full h-auto" dir="rtl">

                    <Link href={`../../../cart/${props.name}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white mt-6 md:mt-3 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </Link>

                </div>

            </div>
        </div>
    )
}