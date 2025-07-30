import { useSelector, useDispatch } from "react-redux";
import { selectCartProducts } from "../cart/Cartselectores";
import { MdCancel } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();

  const cartdata = useSelector(selectCartProducts);

  console.log("cartdata", cartdata);

  return (
    <>
    <div className="container mx-auto">
      <table className="border table-fixed w-full text-center mt-10">
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
        {cartdata.map((item, index) => {
          return (
            <tr key={index} className="border">
              <td className="text-center border">
                <img src={item.image} className="size-20 mx-auto" alt="" />
              </td>
              <td className="border">
                <h2>{item.title}</h2>
              </td>
              <td className="border">
                <p>Rs. {item.price}</p>
              </td>
              <td className="border">
                <div>
                  <div>+</div>
                  <div>0</div>
                  <div>-</div>
                </div>
              </td>
              <td className="border"></td>
              <td>
                <span className="flex justify-center">
                  <MdCancel />
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
    </>
  );
};

export default Cart;