import { useNavigate } from "react-router-dom";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../graphqlType";
import { likeItemSelector } from "../../recoils/like";
import { useRecoilState, useRecoilValue } from "recoil";
import numeral from "numeral";

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

  const [isLiked, setIsLiked] = useRecoilState(likeItemSelector(id));

  const handleToggleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col justify-between">
      <div role="button" onClick={handlePageMove}>
        <div className="relative w-full h-[300px]">
          <img
            alt=""
            src={imageUrl}
            className="w-full h-full bg-white  object-fit"
            onMouseDown={(e) => e.preventDefault()}
          />
          <FontAwesomeIcon
            icon={isLiked ? faHeart : farHeart}
            className="cursor-pointer absolute bottom-2 right-2 text-[20px] text-white"
            onClick={handleToggleLike}
          />
        </div>
        <div className="max-w-xl w-full">
          <div className="mt-8 flex flex-col gap-x-4">
            <span className="text-sm font-semibold">{category}</span>
            <span className="text-sm">{title}</span>
            <div className="mt-6 flex justify-between">
              <span className="text-md font-bold">
                {numeral(price).format("0,0")}
              </span>
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
