import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul className="flex items-center space-x-4">
        <li>
          <Link className="flex items-center" to="/">
            홈
          </Link>
        </li>
        <li>
          <Link className="flex items-center" to="/products">
            상품목록
          </Link>
        </li>
        <li>
          <Link className="flex items-center" to="/cart">
            장바구니
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
