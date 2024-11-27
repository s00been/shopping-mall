import { Link } from "react-router-dom";
import { Product } from "../../types";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <div className="flex flex-col items-start justify-between">
      <Link to={`/products/${id}`}>
        <div className="relative w-full h-[424px]">
          <img
            alt=""
            src={image}
            className="w-full h-full bg-white object-contain"
          />
        </div>
        <div className="max-w-xl w-full">
          <div className="mt-8 flex flex-col gap-x-4">
            <span className="text-sm font-semibold">{category}</span>
            <span className="text-sm">{title}</span>
            <div className="mt-6 flex justify-between">
              <span className="text-md font-bold">${price}</span>
              <span className="text-md font-bold">
                <FontAwesomeIcon icon={faStar} className="pr-1"/>
                {rating.rate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
