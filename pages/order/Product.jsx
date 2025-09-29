import cartSlice from "@/redux/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function EachProduct({ product }) {

    if (!product) return null;

    // redux code
    const dispatch = useDispatch();

    // increase product
    const [price, increase] = useState(product.price), productPrice = product.price;

    function increasePrice() {

        if (price > 100) { increase(productPrice) } else { increase(price + productPrice) }
    }

    return (

        <div className="flex bg-black/50 w-full h-1/5 mt-4 rounded-xl">

            {/* image */}
            <div className="flex items-center justify-center w-2/6 h-full px-2 py-2">
                <Image src={product.image} alt="image" height={100} width={100} className="rounded-lg h-full w-full" />
            </div>

            {/* name and price */}
            <div className="w-3/6 h-full pt-5 pl-2">
                <h1 className="w-full text-white text-left text-xl"> {product.name} </h1>
                <h2 className="w-full text-white/60 text-left text-large mt-2"> {price}$ </h2>
            </div>


            {/* icons remove and add */}
            <div className="w-1/6 h-full">

                {/* remove */}
                <div className="w-full h-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-5 text-white"
                        onClick={() => { dispatch(cartSlice.actions.remove(product.name)) }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </div>

                {/* add */}
                <div className="w-full h-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-white"
                        onClick={increasePrice}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

        </div>
    )
}