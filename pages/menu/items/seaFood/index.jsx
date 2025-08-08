import Item from "./Item"
import seaFoodData from "../../../../data/menu/SeaFood.json"

export default function SeaFoodItems() {

    return (

        <div className="w-screen h-screen px-5 py-10 md:px-32 md:py-40">

            <div className="grid grid-cols-10 w-full h-auto md:gap-x-5 gap-y-6 px-10">

                {
                    seaFoodData.map((item) => (

                        <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} category={item?.type} />
                    ))
                }

            </div>

        </div>
    )
}