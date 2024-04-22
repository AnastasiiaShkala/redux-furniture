import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const PieceOfFurniture = ({piece}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
    <div>
        <img src={`./${piece.img}.jpg`} alt="Maine furniture"/>
        <h2>{piece.name}</h2>
        <p>$ {piece.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({piece, quantity}));
        }}>ADD TO CART</button>
    </div>)
}
export default PieceOfFurniture;