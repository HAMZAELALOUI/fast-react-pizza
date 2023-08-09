import Header from "./Header" 
import CartOverView from '../features/cart/CartOverview'
import { Outlet } from "react-router-dom"

function AppLayouts() {
  return (
    <div>
      <Header/>
      <main>
        <h1>Contenet</h1>
        <Outlet/>
      </main>
     <CartOverView/>
    </div>
  )
}

export default AppLayouts
