import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function FeaturedProducts() {
  type Product = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
  };

  const products: Product[] = [
    {
      id: 1,
      title: "Hoodies & Sweatshirt",
      subtitle: "Explore Now!",
      image: "/assets/images/model-1.jpg",
    },
    {
      id: 2,
      title: "Coats & Parkas",
      subtitle: "Explore Now!",
      image: "/assets/images/model-2.jpg",
    },
    {
      id: 3,
      title: "Tees & T-Shirt",
      subtitle: "Explore Now!",
      image: "/assets/images/model-3.jpg",
    },
  ];

  return (
<section className="w-full max-w-[1200px] mx-auto px-6 py-8">
<h2 className="text-4xl font-extrabold  mb-6 relative">
        New Arrivals <span className="text-yellow-500 absolute text-8xl opacity-30 rounded-t-lg"
          style={{
            left: "12.2rem",
            bottom: "-1.125rem"
          }}
        >▰</span>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg flex flex-col items-center w-99 h-auto rounded-lg overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={750}
              className="object-cover rounded-lg"
            />
            <CardHeader className="w-full p-4 text-center">
              <CardTitle className="text-lg font-semibold">
                {product.title}
              </CardTitle>
              <CardDescription className="text-gray-500 flex items-center justify-center gap-1 cursor-pointer">
                <Link href="/products">{product.subtitle}</Link> <ArrowRight size={16} />
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
