import { useNavigate } from "react-router-dom";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../graphql/products";

const ProductItem = ({
  id,
  imageUrl,
  price,
  category,
  title,
  description,
  createdAt,
  rate,
}: Product) => {
  const navigate = useNavigate();

  const handlePageMove = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="flex flex-col items-start justify-between">
      <div role="button" onClick={handlePageMove}>
        <div className="relative w-full h-[222px]">
          <img
            alt=""
            src={imageUrl}
            className="w-full h-full bg-white object-contain"
          />
          <FontAwesomeIcon
            icon={farHeart}
            className="absolute bottom-2 right-2 pr-1 text-[20px] text-white shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              console.log("FontAwesomeIcon clicked!");
            }}
          />
        </div>
        <div className="max-w-xl w-full">
          <div className="mt-8 flex flex-col gap-x-4">
            <span className="text-sm font-semibold">{category}</span>
            <span className="text-sm">{title}</span>
            <div className="mt-6 flex justify-between">
              <span className="text-md font-bold">${price}</span>
              <span className="text-md font-bold">
                <FontAwesomeIcon icon={farStar} className="pr-1" />
                {rate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
