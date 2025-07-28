import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../cart/cartslice";
import { selectProducts } from "../cart/Cartselectores";

const Product = () => {
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  console.log("productData", productData);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductData(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {productData.map((item, index) => {
            return <div className="col">
              <div>
                <img src={item.image} alt="" />
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Product;