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