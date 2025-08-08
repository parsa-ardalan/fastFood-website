import Image from "next/image";

export default function Item(props) {

    return (

        <div className="grid grid-cols-5 h-24 col-span-10 md:col-span-2 border border-white rounded-md md:rounded-lg md:h-auto">



            {/* image division */}

            <div className="col-span-2 p-2 md:col-span-5">

                <Image src={props?.image} className="w-full h-full rounded-md md:h-full md:w-full" alt={props?.name} width={120} height={120} />

            </div>


            {/* data division */}

            <div className="col-span-3 md:col-span-5">

                <h1 className="w-full text-white text-lg mt-2 md:text-center md:text-xl"> {props?.name} </h1>

                <h2 className="w-full text-white text-sm mt-1 md:mt-4 md:text-center md:text-md"> {props?.price} $ </h2>

                <div className="w-11/12 h-auto md:mt-3 md:mb-2" dir="rtl">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>

            </div>

        </div>
    )
}