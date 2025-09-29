export default function EachProduct({ product }) {

    if(!product) return null;

    return (

        <div className="bg-black/50 w-full h-1/5 mt-4">

            <h1 className="text-white text-lg"> {product.name} </h1>
        </div>
    )
}