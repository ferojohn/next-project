import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="bg-gray-200 m-5 h-auto shadow-lg rounded-lg grid grid-cols-12 p-4 gap-4 items-center 
      md:h-[500px] md:grid-cols-12 md:p-8">
      <div className="p-4 col-span-12 md:col-span-7 text-center md:text-left md:ml-12">
        <h2 className="font-extrabold text-4xl md:text-6xl leading-tight">
          <span className="bg-white inline-block min-w-[100px] px-2 py-1 rounded-md text-center">
            Lets
          </span>
          <br /> Explore <br />
          <span className="bg-yellow-400 px-4 md:px-6 py-2 rounded-md inline-block min-w-[140px] md:min-w-[160px] text-center">
            Unique
          </span>
          <br /> Clothes.
        </h2>
        <p className="text-gray-600 text-md md:text-lg mt-3 md:mt-4">
          Live for Influential and Innovative fashion!
        </p>
        <Link href="/products">
          <Button className="mt-4 md:mt-6 px-5 py-2 md:px-6 md:py-3 text-md md:text-lg bg-black text-white rounded-md shadow-md">
            Shop Now
          </Button>
        </Link>

      </div>
      <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
        <div className="relative w-[80%] md:w-full h-auto">
          <Image
            src="/assets/images/banner.jpg"
            alt="banner-img"
            width={500}
            height={450}
            className="object-content rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
