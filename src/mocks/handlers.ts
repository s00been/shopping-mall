import { graphql } from "msw";
import { GET_CART, ADD_CART } from "../graphql/cart";
import { GET_PRODUCTS, GET_PRODUCT } from "../graphql/products";
import { CartType } from "../graphqlType";

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

// 로컬스토리지에서 장바구니 데이터를 가져오거나, 없으면 빈 객체로 초기화
const loadCartData = () => {
  const savedCartData = localStorage.getItem("cartData");
  return savedCartData ? JSON.parse(savedCartData) : {};
};

// 장바구니 데이터를 로컬스토리지에 저장
const saveCartData = (cartData) => {
  localStorage.setItem("cartData", JSON.stringify(cartData));
};

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
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const cartData = loadCartData(); // 로컬스토리지에서 장바구니 데이터 불러오기
    const id = req.variables.id;
    const targetProduct = mockProducts.find((item) => item.id === id);

    if (!targetProduct) {
      throw new Error("상품이 없습니다");
    }

    // 기존 장바구니에서 상품을 찾아서 수량을 늘리기
    const newItem = {
      ...targetProduct,
      amount: (cartData[id]?.amount || 0) + 1, // 기존 수량에 1을 더함
    };

    // 불변성을 지키기 위해 새로운 객체를 생성하여 장바구니 데이터 갱신
    const newCartData = { ...cartData, [id]: newItem };

    // 로컬스토리지에 새로운 장바구니 데이터 저장
    saveCartData(newCartData);

    return res(ctx.data(newItem)); // 갱신된 장바구니 데이터를 반환
  }),
  graphql.query(GET_CART, (req, res, ctx) => {
    const cartData = loadCartData(); // 로컬스토리지에서 장바구니 데이터 불러오기
    return res(ctx.data(cartData));
  }),
];
