import dataFurniture from "../../data/dataFurniture";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem = ({cartItem}) => {
    const furnitureSlice = dataFurniture.find(item => item.id === cartItem.pieceId);
    const dispatch = useDispatch()

    return (
        <div>
            <p>{furnitureSlice.name}</p>
            <p>{cartItem.quantity} piece(s)</p>
            <p>Price: ${furnitureSlice.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash icon"/>
            </span>  
        </div>
    )
}
export default CartItem;