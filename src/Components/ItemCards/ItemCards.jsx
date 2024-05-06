import "./ItemCard.css";
import { ButtonLink } from "../Buttons/Buttons";

const ItemCard = ({ product }) => {
  return (
    <div className="itemCard">
      <div className="contentProduct">
        <img src={product.image} />
        <p style={{ margin: "0" }}>{product.title}</p>
      </div>
      <div className="buttonContainer">
        <ButtonLink
          to={`/Product/${product.id}`}
          message="See Details"
          style={{ fontSize: "2vh", width: "fit-content", padding: "0.5em" }}
        />
      </div>
    </div>
  );
};

export default ItemCard;
