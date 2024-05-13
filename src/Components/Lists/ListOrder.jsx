import { useDispatch, useSelector } from "react-redux";
import ShoppingCartActions from "/src/Slicers/ShoppingCartSlicer";
import { ActionButton } from "../../Components/Buttons/Buttons";
import "./ListOrder.css";

const ListOrder = ({ cart }) => {
  const dispatch = useDispatch();

  const addedProducts = useSelector((state) => {
    return state.ShoppingCart.products;
  });

  const totalPriceCalc = (mult) => {
    let totalPrice = 0;

    for (let i = 0; i < addedProducts.length; i++) {
      totalPrice += addedProducts[i][0].price * addedProducts[i][1];
    }

    return parseFloat(totalPrice * mult).toFixed(2);
  };

  const handlerDelete = (index) => {
    dispatch(ShoppingCartActions.deleteProduct(index));
  };

  return (
    <div className="detailProduts">
      <ul style={{ textAlign: "center" }}>
        <li style={{ backgroundColor: "rgb(0,0,0,0.85)" }}>
          <h2>Product Name</h2>
          {cart ? (
            <h2>Partial Price</h2>
          ) : (
            <>
              <h2>Amount</h2>
              <h2>Partial Price</h2>
            </>
          )}
        </li>
        {addedProducts.map((product, index) => {
          return (
            <div key={index.toString()}>
              <li>
                <div className="product">
                  {cart ? <img src={product[0].image} /> : <></>}
                  <h5
                    style={{
                      width: "95%",
                      paddingRight: "5%",
                    }}
                  >
                    {`${index + 1}. ${product[0].title}`}
                    {cart ? (
                      <>
                        <br />- Unit Price: $
                        {parseFloat(product[0].price).toFixed(2)} USD
                        <br />- Amount:{" "}
                        <span style={{ fontWeight: "1000" }}>{product[1]}</span>
                      </>
                    ) : (
                      ""
                    )}
                  </h5>
                </div>
                {cart ? (
                  <>
                    <h6 style={{ textAlign: "center" }}>
                      ${parseFloat(product[0].price * product[1]).toFixed(2)}{" "}
                      USD
                    </h6>
                    <ActionButton
                      message={"Delete"}
                      style={{
                        width: "50%",
                        fontSize: "2vh",
                        padding: "0.5em",
                        justifySelf: "center",
                      }}
                      onClick={() => {
                        handlerDelete(index);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <h6>{product[1]}</h6>
                    <h6 style={{ textAlign: "center" }}>
                      ${parseFloat(product[0].price * product[1]).toFixed(2)}{" "}
                      USD
                    </h6>
                  </>
                )}
              </li>
            </div>
          );
        })}
        {cart ? (
          <></>
        ) : (
          <>
            <li>
              <h4 className="priceDetail">
                Products <span>P</span>rice
              </h4>
              <h4 className="prices">${totalPriceCalc(1)} USD</h4>
            </li>
            <li>
              <h4 className="priceDetail">
                Service <span>(</span>10%<span>)</span>
              </h4>
              <h4 className="prices">${totalPriceCalc(0.1)} USD</h4>
            </li>
            <li>
              <h4 className="priceDetail">
                Total <span>P</span>rice
              </h4>
              <h4 className="prices">${totalPriceCalc(1.1)} USD</h4>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ListOrder;
