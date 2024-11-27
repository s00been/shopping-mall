import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import GET_PRODUCTS, { Product } from "../../graphql/products";

import StarRatings from "react-star-ratings";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery<Product>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  const { category, description, imageUrl, price, rating, title } = data;

  console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="mt-10 lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center">
            <img
              alt={imageUrl}
              src={imageUrl}
              className="aspect-square w-full rounded-lg object-contain"
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <StarRatings
                    rating={rating.rate} // 현재 별점 값
                    starRatedColor="black" // 채워진 별의 색상
                    numberOfStars={5} // 전체 별의 개수
                    name="rating" // 별점 컴포넌트의 이름
                    starDimension="24px" // 각 별의 크기
                    starSpacing="2px" // 별 사이의 간격
                  />
                </div>
                <p className="sr-only">{rating.rate} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                  {description}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
