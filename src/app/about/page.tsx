import Link from "next/link";

export default function About() {
    return (
        <div className="mt-16 px-6 sm:px-16">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
                ⬅ Home
            </Link>
            <section className="text-center my-10 cursor-pointer">
                <h1 className="text-4xl font-bold text-yellow-500">Empowering Your Lifestyle</h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    At <span className="font-semibold">OurShop</span>, we deliver high-quality and reliable products that enhance your everyday life.
                </p>
            </section>

            <section className="my-12 text-center cursor-pointer">
                <h2 className="text-2xl font-semibold text-yellow-500">Our Mission & Vision</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-10">
                    <div className="max-w-sm p-6 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-xl font-bold text-gray-900">🚀 Our Mission</h3>
                        <p className="text-gray-600 mt-2">
                            To provide top-notch products that meet your needs while ensuring affordability and durability.
                        </p>
                    </div>
                    <div className="max-w-sm p-6 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="text-xl font-bold text-gray-900">🌍 Our Vision</h3>
                        <p className="text-gray-600 mt-2">
                            We strive to be a trusted brand that revolutionizes shopping with convenience, quality, and innovation.
                        </p>
                    </div>
                </div>
            </section>
            <section className="my-12 text-center cursor-pointer">
                <h2 className="text-2xl font-semibold text-yellow-500">Why Choose Us?</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    {[
                        { emoji: "✅", text: "Premium Quality Products" },
                        { emoji: "🚀", text: "Fast & Secure Delivery" },
                        { emoji: "💰", text: "Affordable Pricing" },
                        { emoji: "📞", text: "24/7 Customer Support" },
                    ].map((item, index) => (
                        <div key={index} className="w-48 p-4 border rounded-lg shadow bg-gray-50">
                            <span className="text-2xl">{item.emoji}</span>
                            <p className="text-gray-600 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="my-12 text-center cursor-pointer">
                <h2 className="text-2xl font-semibold text-yellow-500">Our Journey</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    A small idea turned into a thriving eCommerce platform. Over the years, we've served thousands of happy customers, growing into a trusted brand known for its excellence in product quality and service.
                </p>
            </section>
            <section className="my-12 text-center cursor-pointer">
                <h2 className="text-2xl font-semibold text-yellow-500">Contact Us</h2>
                <p className="text-gray-600 mt-4">
                    Have questions? We’re happy to help!
                </p>
                <div className="mt-4">
                    <p className="text-gray-700">📧 Email: support@carshop.com</p>
                    <p className="text-gray-700">📞 Phone: +91 98765XXXXX</p>
                </div>
            </section>
        </div>
    );
}
