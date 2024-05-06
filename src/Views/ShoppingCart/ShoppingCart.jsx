import { useDispatch, useSelector } from "react-redux";
import ShoppingCartActions from "/src/Slicers/ShoppingCartSlicer";
import { ActionButton } from "../../Components/Buttons/Buttons";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const addedProducts = useSelector((state) => {
    return state.ShoppingCart.products;
  });

  const handlerDelete = (index) => {
    dispatch(ShoppingCartActions.deleteProduct(index));
  };

  return (
    <div className="shoppingCart">
      <h1>Shopping Cart</h1>
      <ul style={{ textAlign: "center" }}>
        {addedProducts.map((product, index) => {
          return (
            <li key={index.toString()}>
              <h2> {`${index + 1}. ${product.title}`}</h2>
              <ActionButton
                message={"Delete"}
                style={{ fontSize: "2vh", padding: "0.5em" }}
                onClick={() => {
                  handlerDelete(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCart;
