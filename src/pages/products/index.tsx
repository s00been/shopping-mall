import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";

import ProductItem from "../../components/products/item"

const ProductList = () => {
  const { data, isLoading, isError, error } = useQuery(
    QueryKeys.PRODUCTS,
    () =>
      fetcher({
        method: "GET",
        path: "/products",
      })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>상품목록</h1>
      <div className="mx-auto mt-16 max-w-sm md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 lg:grid-cols-4">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
