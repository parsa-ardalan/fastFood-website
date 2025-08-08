import Item from "./Item"

import fishData from "../../../../data/menu/Fish.json"

export default function FishItems() {

    return (

        <div className="w-screen h-screen px-5 py-10 md:px-32 md:py-40">

            <div className="grid grid-cols-10 w-full h-auto md:gap-x-5 gap-y-6 px-10">

                {
                    fishData.map((item) => (

                        <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} category={item?.type} />
                    ))
                }

            </div>

        </div>
    )
}