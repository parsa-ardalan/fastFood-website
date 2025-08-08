import Image from "next/image";

export default function Item(props) {

    return (

        <div className="col-span-6 backdrop-brightness-25 shadow-black shadow-lg rounded-md md:col-span-2 duration-300 hover:-mt-3">

            {/* image design */}

            <div className="h-4/6">

                <Image src={props?.image} alt={props?.name} className="rounded-md w-[90px] h-[90px]" layout="fill" />

            </div>

        </div>
    )
}