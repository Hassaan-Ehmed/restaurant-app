import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/MUI/Signup";
import LogIn from "./components/MUI/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import RouteProtection from "./utils/RouteProtect";
import {
  setCartCount,
  setItemsToStore,
  setUserFullName,
} from "./redux/slices/products";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import Burgers from "./pages/Burgers";
import Icecream from "./pages/Icecream";
import Burger from "./pages/Burgers";
import AllFoods from "./pages/AllFoods";
import ErrorPage from "./pages/ErrorPage";
import AuthProtection from "./utils/AuthProtection";
import Noodles from "./pages/Noodles";
import Salad from "./pages/Salad";
import Drinks from "./pages/Drinks";

function App() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const storeState: any = useAppSelector((state) => state.products);

  useEffect(() => {
    let isToken = JSON.parse(localStorage.getItem("userToken") as string) ?? ''

    if (isToken === null) {
      localStorage.setItem("userToken", JSON.stringify(""));
    } else {
      if (isToken) {
        let userFullName = isToken?.split("-");
        dispatch(
          setUserFullName(
            `${userFullName[0]?.toLowerCase()}-${userFullName[1]?.toLowerCase()}`
          )
        );
      }
    }

    let cartProducts = JSON.parse(
      localStorage.getItem("cartProducts") as string
    ) ?? []

    if (cartProducts === null) {
      localStorage.setItem("cartProducts", JSON.stringify([]));
    } else if (cartProducts !== null) {
      dispatch(setItemsToStore(cartProducts));
      let currentQuantity = cartProducts.reduce((a:any,b:any)=> a + b.quantity ,0);
      dispatch(setCartCount(currentQuantity));
    }

    
  },[]);

  return (
    <>
      <Router>

        <Routes>
        
        
<Route path="/signup" element={<AuthProtection><SignUp /></AuthProtection>} />

<Route path="/login" element={<AuthProtection><LogIn /></AuthProtection>} />

        <Route path="/" element={<Navbar cartCount={storeState?.cartCount} />}>
        

          <Route
          index
            element={
              <RouteProtection>
                <AllFoods />
              </RouteProtection>
            }
          />

          <Route
            path="add-to-cart"
            element={
              <RouteProtection>
                <Cart />
              </RouteProtection>
            }
          />
          <Route
            path="pizza"
            element={
              <RouteProtection>
                <Pizza />
              </RouteProtection>
            }
          />
          <Route
            path="burger"
            element={
              <RouteProtection>
                <Burger />
              </RouteProtection>
            }
          />
          <Route
            path="icecream"
            element={
              <RouteProtection>
                <Icecream />
              </RouteProtection>
            }
          />
          <Route
            path="noodles"
            element={
              <RouteProtection>
                <Noodles/>
              </RouteProtection>
            }
          />
          <Route
            path="salad"
            element={
              <RouteProtection>
                <Salad />
              </RouteProtection>
            }
          />
          <Route
            path="drinks"
            element={
              <RouteProtection>
                <Drinks />
              </RouteProtection>
            }
          />


</Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
