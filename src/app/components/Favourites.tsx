import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Favourite() {
  type Product = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
  };

  const products: Product[] = [
    {
      id: 1,
      title: "Trending on Instagram",
      subtitle: "Explore Now!",
      image: "/assets/images/fav.1.jpg",
    },
    {
      id: 2,
      title: "All Under $40",
      subtitle: "Explore Now!",
      image: "/assets/images/fav.2.jpg",
    },
  ];

  return (
    <section className="px-6 py-8">
      <h2 className="text-4xl font-extrabold  mb-6 relative">
        Young’s Favourite <span className="text-yellow-600  absolute text-8xl opacity-30 rounded-t-lg"
          style={{
            left: "17.2rem",
            bottom: "-1.125rem"
          }}
        >▰</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Card key={product.id} className="overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={800}
              height={400}
              className=" object-cover rounded-lg transform hover:scale-105 transition duration-300"
            />

            <CardHeader className="p-4 text-left">
              <CardTitle className="text-lg font-semibold">
                {product.title}
              </CardTitle>
              <CardDescription className="text-gray-600 flex items-center gap-2">
                {index === 1 && <ArrowRight size={16} />}
                <Link href="/products" className="text-gray-600  font-medium hover:text-blue-800">
                  {product.subtitle}
                </Link>
                {index === 0 && <ArrowRight size={16} />}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
