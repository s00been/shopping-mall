import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const ProductsIndex = lazy(() => import("./pages/products/index"));
const ProductsId = lazy(() => import("./pages/products/[id]"));
const Cart = lazy(() => import("./pages/cart/index"));
const Payment = lazy(() => import("./pages/payment/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/products", element: <ProductsIndex /> },
      { path: "/products/:id", element: <ProductsId /> },
      { path: "/cart", element: <Cart /> },
      { path: "/payment", element: <Payment /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/payment" },
  { route: "/products" },
  { route: "/products/:id" },
];
