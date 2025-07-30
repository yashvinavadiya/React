import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addProduct } from "../cart/cartslice";
import { addToWishlist } from "../cart/wishlistSlice"; 
import { selectCartProducts } from "../cart/Cartselectores";

const Product = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartProducts);
  const wishlistItems = useSelector((state) => state.wishlist);

  const [productData, setProductData] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductData(data);
    dispatch(addProduct(data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-12 mt-5">
          {productData.map((item, index) => {
            return (
              <div key={index}>
                <div className="max-w-80 border-2 border-black p-4 rounded-2xl">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[300px] h-[300px] object-contain"
                    />
                  </div>
                  <div>
                    <p className="line-clamp-1">{item.title}</p>
                    <p className="line-clamp-2">{item.description}</p>
                    <p className="btn p-2 rounded-none text-lg bg-white text-black underline">
                      Rs.{item.price}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => {
                        const existingItem = cartItems.find(
                          (cartItem) => cartItem.id === item.id
                        );
                        dispatch(addToCart(item.id));
                        if (existingItem) {
                          alert("Already added. Product quantity increased.");
                        } else {
                          alert("Added successfully");
                        }
                      }}
                      className="btn text-lg p-3 rounded-2xl bg-fuchsia-300 text-white"
                    >
                      ADD CART
                    </button>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => {
                        const alreadyInWishlist = wishlistItems.find(
                          (w) => w.id === item.id
                        );
                        if (alreadyInWishlist) {
                          alert("Already in wishlist");
                        } else {
                          dispatch(addToWishlist(item));
                          alert("Added to wishlist successfully");
                        }
                      }}
                      className="btn text-lg p-3 rounded-2xl bg-blue-300 text-white"
                    >
                      WISHLIST
                    </button>
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
