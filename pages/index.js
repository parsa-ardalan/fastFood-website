import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {

  return (

    <div className={`${geistSans.variable} font-sans min-h-screen text-white`}>


      <Header />
      
      <main className="container mx-auto px-6 md:px-44 pt-28 md:pt-36">

        <h1 className="text-2xl md:text-4xl font-bold">happy meal, happy deal!</h1>

        <p className="mt-5 md:mt-10 text-sm md:text-2xl">

          click on <span className="font-bold text-amber-400">order</span> button right now and get a meal.
          <br />

          look at our new bargains :)

        </p>

        <div className="flex gap-4 mt-7 md:mt-10">

          <Link href="/order"
            className="w-20 h-7 sm:w-40 sm:h-8 md:w-36 md:h-10 flex items-center justify-center border border-amber-400 rounded-md text-amber-400 text-xs sm:text-sm md:text-xl hover:-mt-2 duration-500">
            order
          </Link>

          <Link
            href="/menu/main"
            className="w-20 h-7 sm:w-40 sm:h-8 md:w-36 md:h-10 flex items-center justify-center border border-amber-400 rounded-md text-amber-400 text-xs sm:text-sm md:text-xl hover:-mt-2 duration-500">
            menu
          </Link>

        </div>

      </main>

    </div>

  );
}
