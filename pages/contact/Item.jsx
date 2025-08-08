import Image from "next/image"

export default function Item(props) {

    return (

        <div>

            <a href={props?.add} className="col-span-1" >

                <Image src={props?.image} width={120} height={120} className="w-full h-full rounded-lg" alt="icon" />

            </a>

        </div>

    )
}