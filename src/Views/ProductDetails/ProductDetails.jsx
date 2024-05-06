import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [isLoading, setLoading] = useState(true);

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
      <div className="listProducts">
        <h1 style={{ alignSelf: "center" }}>Is Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
