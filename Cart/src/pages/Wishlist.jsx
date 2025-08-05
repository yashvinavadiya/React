import { useSelector, useDispatch } from "react-redux";
import { selectwishlistProducts } from "../cart/wishSelectors";
import { addToWish } from "../cart/wishlistslice";


const Wishlist = () => {
  const dispatch = useDispatch();
  const wishdata = useSelector(selectwishlistProducts);

  console.log("wishdata", wishdata);

  return (
    <>
      <div className="container mx-auto mt-10">
        <table className="border table-fixed w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {wishdata.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-24 h-24 object-contain mx-auto"
                  />
                </td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">Rs. {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Wishlist