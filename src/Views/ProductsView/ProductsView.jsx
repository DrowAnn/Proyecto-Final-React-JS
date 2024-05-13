import ProductsList from "../../Components/Lists/ListProducts.jsx";
import { ButtonLink } from "../../Components/Buttons/Buttons";
import "./ProductsView.css";

const ProductsView = () => {
  return (
    <div className="productsContainer">
      <ButtonLink
        message="Back To Home"
        to="/"
        style={{ position: "absolute", top: "14vh", left: "5%" }}
      />
      <ProductsList />
    </div>
  );
};

export default ProductsView;
