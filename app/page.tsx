import { FavoritesType, ProductType } from "./lib/type";
import { getAllProducts, getFavorites } from "./actions/actions";
import ProductList from "./components/ProductList";
import { auth } from "@/auth";

export async function Home() {
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
        <ProductList products={products} session={session} favProductsIds={favProductsIds} />
    </main>
  );
}

export default Home;
