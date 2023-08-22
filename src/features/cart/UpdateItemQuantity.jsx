import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { decreaseQuantity, getCurrentQuantity, increaseQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId }) {
  const dispatch=useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
 
  return (
    <div className=" flex gap-2 items-center">
      <Button type="round" onClick={()=>dispatch(decreaseQuantity(pizzaId))}>-</Button>
      <span className=" text-sm">{currentQuantity}</span>
      <Button type="round" onClick={()=>dispatch(increaseQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity
