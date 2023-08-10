import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to={"/"}>fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Hamza El aloui</p>
    </header>
  );
}

export default Header;
