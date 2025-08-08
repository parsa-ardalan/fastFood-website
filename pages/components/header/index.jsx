import Item from "./item";
export default function Header() {

    const HeadOptions = [

        { id: 0, name: "order", link: "/order" },
        { id: 1, name: "menu", link: "/menu/main" },
        { id: 2, name: "Web guide", link: "/web-guide" },
        { id: 3, name: "about us", link: "/about" },
        { id: 4, name: "contact us", link: "/contact" }

    ];

    return (

        <header className="grid grid-cols-5 text-center h-20 mx-auto w-11/12" dir="ltr">

            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor"
                className="text-white size-6 mt-5 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            {HeadOptions.map((item) => (

                <Item link={item?.link} innerHTML={item?.name} key={item?.id} />

            ))}
        </header>

    );
}