import { gql } from "graphql-tag";

export type Cart = {
  id: string;
  imageUrl: string;
  price: number;
  category: string;
  title: string;
  description: string;
  amount: number;
};

export const GET_CART = gql`
  query GET_CART {
    id
    imageUrl
    price
    category
    title
    description
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: string) {
    id
    imageUrl
    price
    category
    title
    description
    amount
  }
`;
