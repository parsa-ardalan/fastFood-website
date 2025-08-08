import Image from "next/image";

export default function Item(props) {

    return (

        <div className="col-span-6 h-auto border border-white rounded-lg md:col-span-3 backdrop-brightness-50 md:h-60">

            {/* image */}

            <div className="w-full h-2/3 px-4 py-2 md:p-4">

                <Image src={props?.image} className="h-full w-full rounded-lg" width={120} height={120} alt={props?.name} />

            </div>


            {/* info */}

            <div className="grid grid-cols-3 w-full mt-1 px-4 md:px-6">

                <div className="col-span-3 md:col-span-2">
                    <h1 className="text-center md:text-left text-white text-sm md:text-lg"> {props?.name} </h1>
                </div>

                <div className="col-span-1 md:col-span-1 mt-2 md:mt-0">
                    <h1 className="text-left mt-2 md:text-right text-white text-xs mb-3 md:text-lg md:ml-0 md:mt-0"> {props?.price}$ </h1>
                </div>

                <div className="col-span-2 flex items-center justify-end md:col-span-3 md:mt-2">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-5 text-white hover:text-amber-400 duration-150 md:size-6">

                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />

                    </svg>

                </div>

            </div>

        </div>
    )
}