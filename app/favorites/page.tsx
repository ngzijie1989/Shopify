import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { getFavoritesAll, getFavorites } from "../actions/actions";
import ProductList from "../components/ProductList";
import { ProductType, FavoritesType } from "../lib/type";

async function page() {
  const session = await auth();
  let productsFavorited: ProductType[] = []
  let favProductsIds: string[] = []

  if (!session || !session.user) {
    redirect("/no-access")
  } else {
    const sessionEmail: string | undefined | null = session.user.email;
    if (sessionEmail) {
      const favoritedProducts = await getFavoritesAll(sessionEmail);
      const favorites: FavoritesType[] | boolean = await getFavorites(sessionEmail) //boolean is because if there is an error
      if (favoritedProducts !== false && favorites !== false){
        productsFavorited = favoritedProducts
        favProductsIds = favorites.map((fav)=> fav.productId)
      } else {
        //show error page
      }
    }
  }
  
  console.log(favProductsIds)


  return (
    <div>
      <main className="mt-5">
      <ProductList products={productsFavorited} session={session} favProductsIds={favProductsIds} />
    </main>
    </div>
  )
}

export default page
