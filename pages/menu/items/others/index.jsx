import Item from "./Item"
import sandwichData from "../../../../data/menu/Others.json"

export default function OtherItems() {

    return (

        <div className="container mx-auto grid grid-cols-12 w-5/6 md:w-3/4 mt-20 scrol gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-20 px-5 py-8">

            {sandwichData.map((item) => (

                <Item key={item?.id} name={item?.prductName} price={item?.price} image={item?.ProductImage} />
            ))}
            
        </div>
    )
}