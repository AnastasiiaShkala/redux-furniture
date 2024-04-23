import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {
    const CartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div>
            <img className="cartIcon" src="/icon.png" alt="icon cart"/> 
            <h3>TOTAL: ${totalPrice}</h3>
            {CartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        </div>
    )
}

export default Cart;