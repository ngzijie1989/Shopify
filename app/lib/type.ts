import { Category, Gender } from "@prisma/client";

export type UserType = {
  id: string;
  name: string;
  email: string;
  provider: string;
}

export type ProductType = {
  id: string;
  name: string;
  price: number;
  imageLink?: string | null;
  quantity: number;
  description?: string| null;
  category: Category;
  gender: Gender;
  user?: UserType| null;
}

export type AddtoCartModalProps = {
  modal: boolean;
  setModal: (value: boolean) => void;
  quantity: number; 
  id: string;
  name: string;
  session: any;
}

export type AddtoCartProps = {
  quantity: number; 
  id: string;
  name: string;
}

export type SessionTypeProps = {
  user: {
    name: string;
    email: string;
    picture: string;
    sub: string;
    iat: number;
    exp: number;
    jti: string;
  };
  name: string;
  email: string;
  picture: string;
  sub: string;
  iat: number;
  exp: number;
  jti: string;
}

export type FavoritesType = {
  id: string;
  userId: string;
  productId: string;
}
