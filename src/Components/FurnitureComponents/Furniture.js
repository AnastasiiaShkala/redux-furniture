import dataFurniture from "../../data/dataFurniture";
import PieceOfFurniture from "./PieceOfFurniture";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/furnitureSlice";

const Furniture = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
        {dataFurniture
        .filter(piece => {
            if(selectedCategory === "ALL") return true;
        return selectedCategory === piece.category;
}
)
.map(piece => <PieceOfFurniture key={piece.id} piece={piece}/>)}
        </div>
    )
}
export default Furniture;