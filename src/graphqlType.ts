export type Product = {
  id: string;
  imageUrl: string;
  price: number;
  category: string;
  title: string;
  description: string;
  createdAt: string;
  rate: number;
};

export type Products = {
  products: Product[];
};

export type CartType = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  amount: number;
};
