import Image from "next/image"

export default function Item(props) {

    return (

        <div className="col-span-6 border border-white rounded-2xl backdrop-blur-lg backdrop-brightness-50 md:col-span-3 md:rounded-3xl">


            {/* image  */}

            <div className="flex justify-center items-center w-full h-[90px] md:h-28 md:w-full md:-mt-13">

                <Image
                    src={props?.image} alt={props?.name}
                    width={100} height={90}
                    className="object-contain md:w-36 md:h-32"
                    loading="lazy"
                />

            </div>

            {/* name , icon and price  */}

            <div className="h-1/3 items-center justify-center">

                <h1 className="w-full text-center text-white text-xs md:text-lg"> {props?.name} </h1>


                {/* price and icon */}

                <div className="grid grid-cols-2 w-full mt-3 md:px-3">


                    {/* price */}

                    <div className="col-span-1 flex items-center px-3 py-2">
                        <h1 className="text-white text-xs md:text-lg"> {props?.price} $ </h1>
                    </div>


                    {/* icon add to cart */}

                    <div className="col-span-1 flex items-center px-3 py-2" dir="rtl">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-5 text-white hover:text-amber-400 duration-150 md:size-7">

                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />

                        </svg>

                    </div>

                </div>
            </div>
        </div>
    )
}