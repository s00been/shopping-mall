import { RecoilState, atom, selectorFamily } from "recoil";

// 장바구니 데이터를 로컬스토리지에서 불러오거나 초기화
const loadCartData = () => {
  const savedCartData = localStorage.getItem("cartData");
  return savedCartData
    ? new Map(Object.entries(JSON.parse(savedCartData)))
    : new Map();
};

// 전역 장바구니 상태
export const cartState = atom<Map<string, number>>({
  key: "cartState", // 고유한 키
  default: loadCartData(), // 초기값
});

export const cartItemSelector = selectorFamily<number | undefined, string>({
  key: "cartItem",
  get:
    (id: string) =>
    ({ get }) => {
      if (cartState) {
        const carts = get(cartState);
        return carts.get(id);
      }
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      console.log(newValue);
      if (typeof newValue === "number") {
        if (cartState) {
          const newCart = new Map([...get(cartState)]);
          newCart.set(id, newValue);
          set(cartState, newCart);
        }
      }
    },
});
