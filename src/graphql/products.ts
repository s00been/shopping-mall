import { gql } from "graphql-tag";

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

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageUrl
    price
    category
    title
    description
    createdAt
    rate
  }
`;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    id
    imageUrl
    price
    category
    title
    description
    createdAt
    rate
  }
`;

export default GET_PRODUCTS;
