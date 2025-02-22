"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchProduct from "../components/SearchProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Product{
  id: number,
  title: string,
  price: number,
  category: string,
  image: string
}

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="shadow-md p-4 hover:shadow-xl transition duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {product.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={32}
                  height={32}
                  className="w-32 h-32 object-cover rounded-md transform hover:scale-105 transition duration-300"
                />
                <p className="text-md font-bold mt-2">${product.price}</p>
                <Link href="/products" className="hover:text-blue-600 text-sm mt-1">
                  View Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-4">No products found.</p>
      )}
    </>
  );
}
