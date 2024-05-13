import { ButtonLink } from "../../Components/Buttons/Buttons";
import PaymentForm from "../../Components/Forms/PaymentForm";
import ListOrder from "../../Components/Lists/ListOrder";
import "./Checkout.css";

const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <ButtonLink
          message="Back To Shopping Cart"
          to="/ShoppingCart"
          style={{ position: "absolute", top: "14vh", left: "5%" }}
        />
        <h1>
          Payment <span>F</span>orm
        </h1>
        <ListOrder />
      </div>
      <div className="checkout" style={{ marginTop: "0vh" }}>
        <PaymentForm />
      </div>
    </>
  );
};

export default Checkout;
