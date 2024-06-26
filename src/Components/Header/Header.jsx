import "./Header.css";
import ARefs from "../ARefs/ARefs.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => {
    let value = 0;
    [...state.ShoppingCart.products].map((product) => {
      value += product[1];
    });
    return value;
  });

  return (
    <div className="headerDiv">
      <div className="logoRD">
        R<span>D</span>
      </div>
      <div className="keywordsReference">
        <ARefs showTitle="Home" linkTo="/" />
        <ARefs showTitle="Products" linkTo="/Products" />
        <ARefs showTitle="Contact Us" linkTo="/ContactUs" />
        <ARefs
          showTitle="carrito"
          img="/src/assets/shopping-cart.png"
          count={count == 0 ? null : count}
          linkTo="/ShoppingCart"
        />
      </div>
    </div>
  );
};

export default Header;
