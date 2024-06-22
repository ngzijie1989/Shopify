import { FavoritesType, ProductType } from "./lib/type";
import { getAllProducts, getFavorites } from "./actions/actions";
import ProductList from "./components/ProductList";
import { auth } from "@/auth";
import HomepageCarousel from "./components/SlideCarousel";
import SlideCarousel from "./components/SlideCarousel";
import SearchBar from "./components/SearchBar";
import HomeClient from "./components/HomeClient";
import { Suspense } from "react";

export default async function Home() {

  const products: ProductType[] = await getAllProducts()
  const session: any | null = await auth()
  
  let favProductsIds: string[] = []
  if (session){
    const sessionEmail: string = session.user.email
    const favorites: FavoritesType[] | boolean = await getFavorites(sessionEmail) //boolean is because if there is an error
    if (favorites !== false) {
      favProductsIds = favorites.map((fav)=> fav.productId)
    }
  } 

  return (
    <main className="mt-5">
        <h1 className="font-bold text-2xl mx-4">Promotions</h1>
        <SlideCarousel />
        <HomeClient products={products} session={session} favProductsIds={favProductsIds} />

    </main>
  );
}
