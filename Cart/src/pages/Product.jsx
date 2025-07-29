import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart , addProduct } from "../cart/cartSlice";
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
    dispatch(addProduct(data))
  };
  
  useEffect(() => {
    fetchProduct();
  }, []);

  console.log('products' , products);
  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-12">
          {productData.map((item, index) => {
            return (
              <div key={index} className="">
                <div className="max-w-80 border-2 border-black p-4">
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="w-[300px] h-[300px] object-contain"
                    />
                  </div>
                  <div>
                    <p className="line-clamp-1">{item.title}</p>
                    <p className="line-clamp-2">{item.description}</p>
                    <p className="btn p-2 rounded-none text-lg bg-white text-black underline">Rs.{item.price}</p>
                  </div>
                  <div>
                    <button onClick={() => dispatch(addToCart(item.id))} className="btn text-lg p-3 rounded-none">ADD CART</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;