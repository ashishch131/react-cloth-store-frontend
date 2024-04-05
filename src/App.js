import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/products/:category",
      element: <ProductList/>,
    },
    {
      path: "/product/:id",
      element: <Product/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/login",
      element: user? <Home/> :  <Login/>,
    },
    {
      path: "/register",
      element: user? <Home/> : <Register/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
