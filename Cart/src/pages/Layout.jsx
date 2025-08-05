import { HomePage , ProductPage , CartPage , ErrorPage , LoginPage , WishlistPage , ProfilePage  , Navbar} from "./index";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/product" element={<ProductPage/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/wishlist" element={<WishlistPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Layout