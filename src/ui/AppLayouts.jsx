import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayouts() {
  const navigation = useNavigation();
  const isLoading=navigation.state === 'loading';
  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header />
      <main>
        <h1>Contenet</h1>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayouts;
