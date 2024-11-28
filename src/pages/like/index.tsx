import { useQuery } from "react-query";
import ProductItem from "../../components/products/item";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import GET_PRODUCTS, { Products } from "../../graphql/products";

const Like = () => {
  const { data, isLoading, error } = useQuery<Products>(
    [QueryKeys.PRODUCTS],
    () => graphqlFetcher(GET_PRODUCTS) as Promise<Products>
  );

  if (isLoading) {
    <div>Loading...</div>;
  } else if (error) {
    <div> error</div>;
  }

  return (
    <div>
      <div className="mx-auto mt-16 max-w-sm md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 lg:grid-cols-4">
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Like;
