import { useSelector } from "react-redux"
import EachProduct from "./Product"

export default function Order() {

    const cartData = useSelector((state) => state.cart.value)


    return (

        <div className="w-screen h-screen flex items-center justify-center">

            <div className="border border-white w-5/6 h-4/6 overflow-y-auto py-6 px-4">

                {cartData.map((item) => (

                    <EachProduct key={item.id} product={item} />
                ))}

            </div>

        </div>
    )
}