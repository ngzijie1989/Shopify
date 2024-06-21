import { FavoritesType, ProductType } from "./lib/type";
import { getAllProducts, getFavorites } from "./actions/actions";
import ProductList from "./components/ProductList";
import { auth } from "@/auth";
import HomepageCarousel from "./components/SlideCarousel";
import SlideCarousel from "./components/SlideCarousel";

export async function Home() {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Add small delay so that can see shimmer haha
  await delay(500); // 5000 milliseconds = 5 seconds

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
        <h1 className="font-bold text-2xl ms-2">Promotions</h1>
        <SlideCarousel />
        <h1 className="font-bold text-2xl ms-2 mt-4">Products</h1>
        <ProductList products={products} session={session} favProductsIds={favProductsIds} />
    </main>
  );
}

export default Home;
