import cartSlice from "@/redux/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Item(props) {

    // redux codes
    const dispatch = useDispatch();

    return (

        <div className="col-span-6 backdrop-brightness-25 shadow-black shadow-lg rounded-md md:col-span-2 duration-300 hover:-mt-3">

            {/* image design */}

            <div className="h-4/6" onClick={() => {dispatch(cartSlice.actions.add(props))}}>

                <Image src={props?.image} alt={props?.name} className="rounded-md w-[90px] h-[90px]" layout="fill" />

            </div>

        </div>
    )
}