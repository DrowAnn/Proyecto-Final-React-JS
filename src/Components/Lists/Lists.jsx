import "./Lists.css";
import { ProductsListContent } from "../../App";
import { useContext, useState } from "react";

function CountProducts({ listMap, onClick }) {
  return (
    <>
      {listMap.map((product) => {
        return (
          <li key={product.id}>
            <a
              className="ListA"
              onClick={() => {
                onClick(product.id);
              }}
            >
              {product.title}
            </a>
          </li>
        );
      })}
    </>
  );
}

function showSection(showPicture, productsList) {
  if (showPicture) {
    return (
      <div className="pictureSpace">
        <img className="imageClass" src={productsList[showPicture - 1].image} />
        <p className="textClass">{productsList[showPicture - 1].description}</p>
      </div>
    );
  } else {
    return (
      <div className="pictureSpace">
        <h1 className="initialSpace">Select a product to see it here!</h1>
      </div>
    );
  }
}

export default function ProductsList() {
  const dataProducts = useContext(ProductsListContent);
  const [showPicture, setShowPicture] = useState(false);

  if (dataProducts.isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <div className="listProducts">
      <h1 className="titleSection">
        <mark>Products List</mark>
      </h1>
      <div className="productsView">
        <ol className="products">
          <CountProducts
            listMap={dataProducts.productsList}
            onClick={setShowPicture}
          />
        </ol>
        {showSection(showPicture, dataProducts.productsList)}
      </div>
    </div>
  );
}
