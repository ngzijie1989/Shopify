'use client'

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { AddToFavorites } from "../actions/actions";
import toast from "react-hot-toast";
import { useState } from "react";

function AddFavorite({id, session, favProductsIds}: {id: string; session: any, favProductsIds: string[]}) {
  const [ favorite, setFavorite ] = useState<boolean>(favProductsIds.includes(id))

  const handleAddFavorite = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!session){
      toast.error("You need to sign in before adding to Favorites")
    } else {
        const addFavorites = await AddToFavorites(id, session);
        if (addFavorites === "deleted"){
          toast.success("Item has been removed from favourites")
          setFavorite(!favorite)
          if (window.location.href.includes('/favorites')) {
            window.location.href = `/favorites`
          }
        } else if (addFavorites === "added") {
          toast.success("Item has been added into your favourites")
          setFavorite(!favorite)
          if (window.location.href.includes('/favorites')) {
            window.location.href = `/favorites`
          }
        } else {
          toast.error("There was an error. Please try again")
        }
    }

  }

  return (
    <div>
      <button onClick={handleAddFavorite} className="absolute top-3 right-3">
        {favorite ? <span className="text-2xl hover:text-3xl transition ease-in duration-700 text-red-700"><MdFavorite /></span> : 
        <span className="text-2xl hover:text-3xl transition ease-in duration-700"><MdFavoriteBorder /></span>}
      </button>
    </div>
  )
}

export default AddFavorite

