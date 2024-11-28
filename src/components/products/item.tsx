import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-regular-svg-icons";
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
  return (
    <div className="flex flex-col items-start justify-between">
      <Link to={`/products/${id}`}>
        <div className="relative w-full h-[222px]">
          <img
            alt=""
            src={imageUrl}
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
                <FontAwesomeIcon icon={faStar} className="pr-1" />
                {rate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
