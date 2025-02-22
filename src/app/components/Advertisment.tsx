import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Advertisment() {
    return (
        <div className="bg-yellow-200 m-5 h-auto shadow-lg rounded-lg grid grid-cols-12 p-4 gap-4 items-center 
      md:h-[500px] md:grid-cols-12 md:p-8">
            <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
                <Image
                    src="/assets/images/image01.jpg"
                    alt="advertisement"
                    height={450}
                    width={800} 
                    className="w-full h-[450px] object-fit rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
                />
            </div>
            <div className="p-4 col-span-12 md:col-span-6 text-center md:text-left md:ml-12">
                <h2 className="font-extrabold text-4xl md:text-6xl leading-tight">
                    <span className="bg-white inline-block min-w-[100px] px-2 py-1 rounded-md text-center">
                        PAYDAY
                    </span>
                    <br />
                    SALES NOW
                </h2>
                <p className="text-black-800  text-lg  md:text-lg mt-4 md:mt-6 md:mb-6">
                    Spend minimal $100 get 30% off<br />
                    voucher code for your next purchase
                </p>
                <h2 className="text-black font-extrabold">1 June - 10 June 2021</h2>
                <p>*Terms & Conditions apply</p>
                <Link href="/products">
                    <Button className="mt-4 md:mt-6 px-5 py-2 md:px-6 md:py-3 text-md md:text-lg bg-black text-white rounded-md shadow-md">
                        Shop Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}