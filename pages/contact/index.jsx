import Item from "./Item"

export default function Contact() {

    const icons = [

        {
            id: 0,
            name: "instagram",
            imageLink: "/icons/instagram.png",
            address: "#"
        },
        {
            id: 1,
            name: "facebook",
            imageLink: "/icons/facebook.png",
            address: "#"
        },
        {
            id: 2,
            name: "whatsapp",
            imageLink: "/icons/whatsapp.png",
            address: "#"
        },
        {
            id: 3,
            name: "telegram",
            imageLink: "/icons/telegram.png",
            address: "#"
        },
    ]

    return (

        // parent division

        <div className="h-screen w-screen border flex items-center justify-center px-3 md:px-32">


            {/* container division */}

            <div className="h-5/6 w-full grid grid-cols-2 gap-y-10">


                {/* main division */}

                <form className="col-span-2 md:col-span-1 h-auto" method="POST">

                    <input type="email" id="email-input" className="border-b border-white duration-300 outline-none w-3/4 h-12 text-white ml-3 px-2 placeholder:text-white md:text-lg md:mt-3"
                        placeholder="Your E-mail address"
                    />

                    <textarea id="mail" className="text-sm border border-white w-3/4 ml-3 h-3/5 mt-5 outline-none px-3 py-3 text-white md:text-lg md:mt-10"
                        placeholder="write your message..."
                    />


                    {/* submit button */}

                    <div className="w-3/4 h-auto ml-3 mt-4" dir="rtl">
                        <input type="submit" value="send" className="border border-white w-14 h-8 rounded-sm text-white text-sm md:w-16 duration-300 hover:border-amber-400 hover:text-amber-400 md:mt-4" />
                    </div>

                </form>


                <div className="col-span-2 border-t border-white md:col-span-1 md:border-l md:border-t-0 md:px-4">

                    <h1 className="text-white text-2xl mt-6 ml-3 md:text-3xl md:mt-5 md:ml-6"> Contact us </h1>

                    <h2 className="text-white mt-8 ml-7 md:text-xl md:mt-12"> phone us in necessary </h2>

                    <h3 className="mt-4 ml-9 text-stone-300 md:text-lg md:mt-6"> 0937 563 2332 </h3>
                    <h3 className="mt-2 ml-9 text-stone-300 md:text-lg"> 0915 820 9969 </h3>


                    <h2 className="text-white mt-10 ml-7 md:text-xl md:mt-16"> also follow us in... </h2>

                    <div className="grid grid-cols-5 h-12 w-full mx-auto mt-8 px-7 gap-x-3 md:px-20 md:gap-x-5 md:mt-12">

                        {
                            icons.map((icon) => (

                                <Item key={icon?.id} add={icon?.address} image={icon?.imageLink} />
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}