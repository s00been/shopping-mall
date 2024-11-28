import { gql } from "graphql-tag";

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
