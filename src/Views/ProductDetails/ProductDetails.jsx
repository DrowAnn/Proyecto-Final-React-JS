import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActionButton, ButtonLink } from "../../Components/Buttons/Buttons";
import { useDispatch } from "react-redux";
import ShoppingCartActions from "/src/Slicers/ShoppingCartSlicer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function callData(id) {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }

  useEffect(() => {
    callData(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="productContainer">
        <h1 className="detailsContent">Is Loading...</h1>
      </div>
    );
  }

  const handlerAddToCart = (product) => {
    dispatch(ShoppingCartActions.addToCart(product));
  };

  return (
    <div className="productContainer">
      <ButtonLink
        message="Back To Products"
        to="/Products"
        style={{ position: "absolute", top: "14vh", left: "5%" }}
      />
      <div className="detailsContent">
        <h2>
          <span>- </span>
          {product.title}
        </h2>
        <div className="imageContainer">
          <img src={product.image} />
        </div>
        <p>
          <span>Description: </span>
          {product.description}
          <br />
          <br />
          <span>Category: </span>
          {product.category}
          <br />
          <br />
          <span>Price: </span>$ {product.price} USD
          <br />
          <br />
          <span>Rating: </span>
          {product.rating.rate} / 5.0 <span> with </span> {product.rating.count}{" "}
          Comments
        </p>
        <ActionButton
          onClick={() => {
            handlerAddToCart(product);
          }}
          message="Add To Cart"
          style={{ border: "solid rgb(204, 2, 2)" }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
