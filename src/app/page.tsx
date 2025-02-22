
import Banner from "./components/Banner";
import Favourite from "./components/Favourites";
import FeaturedProducts from "./components/FeaturedProducts";
import Advertisment from "./components/Advertisment";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center gap-16 px-8 sm:px-20 w-full">
        <Banner />
        <Favourite />
        <Advertisment/>
        <FeaturedProducts />
      </main>

    </div>
  );
}

