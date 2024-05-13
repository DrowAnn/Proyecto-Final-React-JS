import "./ListProducts.css";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCards/ItemCards";

function CountProducts({ listMap }) {
  return (
    <>
      {listMap.map((product) => {
        return (
          <div className="itemContainer" key={product.id}>
            <ItemCard product={product} />
          </div>
        );
      })}
    </>
  );
}

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function callData() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }

  useEffect(() => {
    callData();
  }, []);

  if (isLoading) {
    return (
      <div className="listProducts">
        <h1 style={{ alignSelf: "center" }}>Is Loading...</h1>
      </div>
    );
  }

  return (
    <div className="listProducts">
      <h1 className="titleSection">
        Product <span>L</span>ist
      </h1>
      <div className="products">
        <CountProducts listMap={products} />
      </div>
    </div>
  );
}

export default ProductsList;
