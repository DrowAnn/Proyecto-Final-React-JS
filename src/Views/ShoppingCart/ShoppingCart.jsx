import { useDispatch, useSelector } from "react-redux";
import ShoppingCartActions from "/src/Slicers/ShoppingCartSlicer";
import { ActionButton, ButtonLink } from "../../Components/Buttons/Buttons";
import "./ShoppingCart.css";

const ListShoppingCart = ({ addedProducts }) => {
  const dispatch = useDispatch();

  const handlerDelete = (index) => {
    dispatch(ShoppingCartActions.deleteProduct(index));
  };

  return (
    <>
      {addedProducts.map((product, index) => {
        return (
          <div key={index.toString()}>
            <li>
              <p style={{ paddingRight: "5%" }}>{`${index + 1}. ${
                product.title
              }`}</p>
              <p style={{ textAlign: "center" }}>
                ${parseFloat(product.price).toFixed(2)} USD
              </p>
              <ActionButton
                message={"Delete"}
                style={{ fontSize: "2vh", padding: "0.5em" }}
                onClick={() => {
                  handlerDelete(index);
                }}
              />
            </li>
          </div>
        );
      })}
    </>
  );
};

const ShoppingCart = () => {
  const addedProducts = useSelector((state) => {
    return state.ShoppingCart.products;
  });

  const totalPriceCalc = () => {
    let totalPrice = 0;

    for (let i = 0; i < addedProducts.length; i++) {
      totalPrice += addedProducts[i].price;
    }

    return parseFloat(totalPrice).toFixed(2);
  };

  return (
    <div className="shoppingCart">
      <h1>
        Shopping <span>C</span>art
      </h1>
      <div className="detailProduts">
        <ul style={{ textAlign: "center" }}>
          <li style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
            <h2>Product Name</h2>
            <h2>Price</h2>
          </li>
          <ListShoppingCart addedProducts={addedProducts} />
        </ul>
      </div>
      <h1 className="priceContainer">
        Total <span>P</span>rice: ${totalPriceCalc()} USD
      </h1>
      <ButtonLink to="/Checkout" message="Ready To Pay" />
    </div>
  );
};

export default ShoppingCart;
