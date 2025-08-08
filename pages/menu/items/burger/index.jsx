import Item from "./Item"
import BurgerData from "../../../../data/menu/Burger.json"

export default function BurgerItems() {

    return (

        <div className="flex h-screen w-screen items-center justify-center">

            <div className="w-5/6 mx-auto grid grid-cols-12 md:w-4/6 gap-x-5 gap-y-7 px-5 py-8 md:gap-x-10 md:gap-y-20">

                {BurgerData.map((item) => (

                    <Item key={item?.id} name={item?.productName} image={item?.ProductImage} price={item?.price} category={item?.type} />
                ))}

            </div>

        </div>

    )
}
