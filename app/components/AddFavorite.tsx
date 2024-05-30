'use client'

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { AddToFavorites } from "../actions/actions";

function AddFavorite({id, session}: {id: string; session: any}) {

  const handleAddFavorite = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const addFavorites = await AddToFavorites(id, session);
    //carry on
  }

  return (
    <div>
      <button onClick={handleAddFavorite} className="absolute top-3 right-3"><span className="text-2xl hover:text-3xl transition ease-in duration-700"><MdFavoriteBorder /></span></button>
    </div>
  )
}

export default AddFavorite
