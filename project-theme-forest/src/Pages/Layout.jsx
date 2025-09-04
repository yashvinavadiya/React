import { Homepage , Aboutuspage , Blogpage , Chekoutpage , Loginpage , WishlistPage , Contactpage  ,Forgetpasswordpage,Shopiingcartpage, Navbar} from "./INDEX.JSX";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/aboutus" element={<Aboutuspage/>}></Route>
          <Route path="/blog" element={<Blogpage/>}></Route>
          <Route path="/wishlist" element={<WishlistPage/>}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/contact" element={<Contactpage/>}></Route>
          <Route path="/forgetpassword" element={<Forgetpasswordpage/>}></Route>
           <Route path="/shopingcart" element={<Shopiingcartpage/>}></Route>
            <Route path="/chekout" element={<Chekoutpage/>}></Route>
           
        </Routes>
      </Router>
    </div>
  )
}

export default Layout