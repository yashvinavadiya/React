import "./App.css";
import { Home } from "./pages/home";
import AddUser from "./pages/Addusers";
import EditUser from "./pages/Edituser";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";

const routePath = createBrowserRouter([
  {
    path: "/",
    element: < Navbar/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adduser",
        element: <AddUser />,
      },
      {
        path: "/edituser/:id",
        element: <EditUser />,
      },
     
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routePath} />
      
    </>
  );
}

export default App;

