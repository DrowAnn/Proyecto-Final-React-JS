import "./ItemCard.css";
import { useDispatch } from "react-redux";
import ShoppingCartActions from "/src/Slicers/ShoppingCartSlicer";
import { ButtonLink } from "../Buttons/Buttons";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="itemCard">
      <img src={product.image} />
      <p>{product.title}</p>
      <ButtonLink
        to={`/Product/${product.id}`}
        message="See Details"
        style={{ fontSize: "2vh", padding: "0.5em" }}
      />
      {/* <a
        onClick={() => {
          dispatch(ShoppingCartActions.addToCart(product));
        }}
      >
        {product.title}
      </a> */}
    </div>
  );
};

export default ItemCard;
