import { Category, Gender, Status, Delivery } from "@prisma/client";

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
  description?: string | null;
  category: Category;
  gender: Gender;
  user?: UserType | null;
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

export type CartItemsType = {
  id: string;
  userId: string;
  productId: string;
  cartQuantity: number;
  status: Status;
  product: CartProductType;
}

export type CartProductType = {
  id: string;
  name: string;
  price: number;
  imageLink: string;
  quantity: number;
  description: string;
  category: Category;
  gender: Gender;
  userId: string;
}

export type ConfirmedOrderType = {
  id: string;
  userId: string | null;
  totalPrice: number;
  paymentMethod: string;
  DeliverStatus: Delivery;
  confirmedItems?: ConfirmedItemsType | null
}

export type ConfirmedItemsType = {
  id: string;
  ConfirmedOrderId: string | null;
  productId: string | null;
  Quantity: number;
  BoughtPrice: number;
  product: ProductType;
}
