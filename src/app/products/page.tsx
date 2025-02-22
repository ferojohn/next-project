import Link from "next/link"
import ProductList from "./ProductList"

export default function Product() {
    return (
        <>
            <div className="mt-[65px]">
                <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
                    ⬅ Home
                </Link>
                <h1 className="text-2xl font-bold w-full  text-center text-pink-500">Products List</h1>
                <ProductList />
                <div>
                </div>
            </div>
        </>

    )
}