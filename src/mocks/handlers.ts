import { graphql } from "msw";
import { GET_PRODUCTS, GET_PRODUCT } from "../graphql/products";

const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1 + "",
    imageUrl: `https://loremflickr.com/640/480?random=${i + 1}`,
    price: 50000,
    category: `Category ${i + 1}`,
    title: `임시상품${i + 1}`,
    description: `임시상품상세내용${i + 1}`,
    createdAt: new Date(1694461295180 + i * 1000 * 60).toString(),
    rate: 3,
  })))();

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mockProducts.find((item) => item.id === req.variables.id);
    if (found) return res(ctx.data(found));
    return res();
  }),
];
