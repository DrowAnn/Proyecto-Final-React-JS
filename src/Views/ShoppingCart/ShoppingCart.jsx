import { useSelector } from "react-redux";
import { ButtonLink } from "../../Components/Buttons/Buttons";
import "./ShoppingCart.css";
import ListOrder from "../../Components/Lists/ListOrder";

const ShoppingCart = () => {
  const addedProducts = useSelector((state) => {
    return state.ShoppingCart.products;
  });

  const totalPriceCalc = () => {
    let totalPrice = 0;

    for (let i = 0; i < addedProducts.length; i++) {
      totalPrice += addedProducts[i][0].price * addedProducts[i][1];
    }

    return parseFloat(totalPrice).toFixed(2);
  };

  return (
    <div className="shoppingCart">
      <ButtonLink
        message="Back To Products"
        to="/Products"
        style={{ position: "absolute", top: "14vh", left: "5%" }}
      />
      <h1>
        Shopping <span>C</span>art
      </h1>
      <ListOrder cart={true} />
      <h1 className="priceContainer">Total Price: ${totalPriceCalc()} USD</h1>
      <ButtonLink to="/Checkout" message="Ready To Pay" />
    </div>
  );
};

export default ShoppingCart;
