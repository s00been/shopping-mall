import { lazy } from "react"; // 컴포넌트를 동적으로 로드 -> Suspense 함께 사용함
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const ProductsIndex = lazy(() => import("./pages/products/index"));
const ProductsId = lazy(() => import("./pages/products/[id]"));
const Like = lazy(() => import("./pages/like/index"));
const Cart = lazy(() => import("./pages/cart/index"));
const Payment = lazy(() => import("./pages/payment/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/like", element: <Like />, index: true },
      { path: "/cart", element: <Cart />, index: true },
      { path: "/payment", element: <Payment />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/like" },
  { route: "/cart" },
  { route: "/payment" },
  { route: "/products" },
  { route: "/products/:id" },
];
