import Item from "./Item"
import drinks from "../../../../data/menu/Drinks.json"


export default function DrinkItems() {

    return (

        <div className="w-screen h-screen flex justify-center items-center">

            <div className="grid grid-cols-12 h-3/4 w-10/12 py-6 px-3 gap-y-5 gap-x-3 md:py-36 md:gap-x-6">

                {drinks.map((item) => (

                    <Item key={item?.id} name={item?.prductName} price={item?.price} image={item?.ProductImage} />

                ))}

            </div>

        </div>

    )
}