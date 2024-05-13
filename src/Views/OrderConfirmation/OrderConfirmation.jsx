import { useDispatch } from "react-redux";
import TriangleDecoration from "../../Components/TrianglesDecoration/TrianglesDecoration";
import "./OrderConfirmation.css";
import { useLocation } from "react-router-dom";
import UsersDataActions from "/src/Slicers/UsersDataSlicer.js";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  dispatch(UsersDataActions.saveData(state));

  return (
    <div className="orderConfirmation">
      <TriangleDecoration />
      <h1>
        Thanks for <span>B</span>uying
      </h1>
      <p>
        {`Hi, ${state.name} ${state.lastName}, an email with your payment link was sent to your email: ${state.email}. After you make your payment, an shipping advisor
        will call you at: ${state.phoneNumber} in order to confirm your shipping information. Your current address is: ${state.address} in ${state.city}, ${state.country}.`}
      </p>
      <h2>Come back soon!</h2>
      <h1>{":)"}</h1>
    </div>
  );
};

export default OrderConfirmation;
