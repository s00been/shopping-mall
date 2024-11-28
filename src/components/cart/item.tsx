import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../../graphqlType";
import numeral from "numeral";

import {
  CheckIcon,
  ClockIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
const CartItem = ({
  id,
  imageUrl,
  price,
  category,
  title,
  description,
  amount,
  checked,
  onCheckboxChange,
}: Cart) => {
  return (
    <li className="flex py-6 sm:py-4">
      <div className="flex items-start">
        {/* Checkbox */}
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={checked} // 상태 반영
          onChange={onCheckboxChange} // 핸들러 연결
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </div>

      <div className="shrink-0 ml-4">
        <img
          alt={imageUrl}
          src={imageUrl}
          className="size-24 rounded-md object-cover sm:size-32"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <Link
                  to={`/products/${id}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {title}
                </Link>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{category}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {numeral(price).format("0,0")}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <select
              id={`quantity-${id}`}
              name={`quantity-${id}`}
              className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base/5 font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <div className="absolute right-0 top-0">
              <button
                type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XMarkIconMini aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
