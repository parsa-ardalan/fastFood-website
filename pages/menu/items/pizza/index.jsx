import Item from "./Item"
import PizzaData from "../../../../data/menu/Pizza.json"

export default function PizzaItems() {


    return (

        <div className="container w-5/6 mx-auto grid grid-cols-6 py-10 md:mt-12 scroll md:gap-x-16 gap-y-4 md:gap-y-8 md:px-32">

            {PizzaData.map((item) => (

                <Item  key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} about={item?.about} id={item?.id}/>

            ))}

        </div>

    )
}