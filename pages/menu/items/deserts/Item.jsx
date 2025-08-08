export default function Item(props) {
    return (
        <div
            className="col-span-3 border border-white rounded-lg bg-cover bg-center bg-black/70 bg-blend-darken md:col-span-2 md:py-6"
            style={{ backgroundImage: `url(${props.image})` }}>

            {/* name */}

            <div className="h-4/5 flex items-start md:items-start justify-center pt-7 md:pt-0">

                <h1 className="text-center w-full text-white text-sm md:text-2xl">{props?.name}</h1>

            </div>

            {/* price and icon */}

            <div className="h-auto w-full grid grid-cols-2 px-2 md:px-3 items-center">

                {/* price */}

                <div className="col-span-1">

                    <h2 className="text-white text-xs md:text-lg">{props?.price}$</h2>

                </div>

                {/* icon */}

                <div className="col-span-1 flex justify-end">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-7 md:h-7 text-white hover:text-amber-400 duration-150 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>

                </div>

            </div>

        </div>
    );
}
