import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { GET_PRODUCT } from "../../graphql/products";

import StarRatings from "react-star-ratings";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import numeral from "numeral";
import { ADD_CART } from "../../graphql/cart";
import { faHeart, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { likeItemSelector } from "../../recoils/like";
import { useRecoilState, useRecoilValue } from "recoil";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery<Product>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id }) as Promise<Product>
  );

  const [isLiked, setIsLiked] = useRecoilState(likeItemSelector(id));

  const { mutate: addCart } = useMutation<void, Error, string>(
    (id: string) => graphqlFetcher(ADD_CART, { id }),
    {
      refetchOnWindowFocus: true, // 윈도우 포커스 시 쿼리 다시 호출
    }
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

  const { category, color, description, imageUrl, price, rate, title } = data;

  const handleToggleLike = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev); // Use functional update for consistency.
  };

  console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="relative mt-10 lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center">
            <img
              alt={imageUrl}
              src={imageUrl}
              className="aspect-square w-full object-fill"
            />
            <FontAwesomeIcon
              icon={isLiked ? faHeart : farHeart}
              className="cursor-pointer absolute top-3 right-3 text-[24px] text-black"
              onClick={handleToggleLike}
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 border-t border-gray-900 pt-5">
            {/* Reviews */}
            <div className="mb-2">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <StarRatings
                    rating={rate} // 현재 별점 값
                    starRatedColor="black" // 채워진 별의 색상
                    numberOfStars={5} // 전체 별의 개수
                    name="rating" // 별점 컴포넌트의 이름
                    starDimension="10px" // 각 별의 크기
                    starSpacing="2px" // 별 사이의 간격
                  />
                </div>
                <p className="sr-only">{rate} out of 5 stars</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title} - {color}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {numeral(price).format("0,0")}원
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            <div className="absolute w-full bottom-0">
              <div className="flex">
                <button
                  onClick={() => addCart(id)}
                  className="flex w-1/4 items-center justify-center  border border-indigo-600 bg-white px-8 py-3 text-base font-medium text-indigo-600  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                >
                  장바구니
                </button>
                <button className="flex  w-1/4 items-center justify-center  border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
