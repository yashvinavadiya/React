import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartslice";
import { selectProducts } from "../cart/Cartselectores";
import { fetchProducts } from "../cart/cartActions";
import { useEffect } from "react";
import { addToWish } from "../cart/wishlistslice";


const Product = () => {

 
  const products = useSelector(selectProducts);

  console.log('products' , products);
  
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchProducts())
  } , [])
  console.log('products' , products);
  
  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="flex flex-wrap justify-center gap-12">
          {products.map((item, index) => {
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
                    <button onClick={() => dispatch(addToCart(item.id))} className="btn text-lg p-3 rounded-2xl">ADD CART</button>
                  </div>
                   <div>
                    <button onClick={() => dispatch(addToWish(item.id))} className="btn text-lg p-3 rounded-2xl ">ADD WISH</button>
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