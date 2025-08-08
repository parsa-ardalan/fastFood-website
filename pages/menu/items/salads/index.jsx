import Item from "./Item"
import saladData from "../../../../data/menu/Salad.json"

export default function SaladItems() {

    return (

        <div className="h-screen w-screen flex items-center justify-center">

            <div className="h-4/5 w-5/6 border border-white mx-auto overflow-y-hidden grid grid-cols-6 py-24 px-8 gap-8 md:gap-12 md:px-56 md:py-22">

                {saladData.map((item) => (

                    <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} category={item?.type} />

                ))}

            </div>

        </div>

    )
}