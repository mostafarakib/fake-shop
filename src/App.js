import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ItemsReview from "./components/ItemsReview/ItemsReview";
import Laptop from "./components/Laptop/Laptop";
import Camera from "./components/Camera/Camera";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import { addToDb, getStoredCart } from "./utilities/fakedb";
import useProducts from "./hooks/useProducts";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

export const CartContext = createContext("cart");

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useProducts();

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => key === product.key);

        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <CartContext.Provider value={handleAddToCart}>
      <div className="App">
        <Router>
          <NavigationBar cart={cart}></NavigationBar>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/itemsReview">
              <ItemsReview></ItemsReview>
            </Route>
            <Route path="/laptop">
              <Laptop></Laptop>
            </Route>
            <Route path="/camera">
              <Camera></Camera>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/cart">
              <Cart cart={cart} setCart={setCart}></Cart>
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>
            {/* <Route path="/viewDetails">
              <ViewDetails></ViewDetails>
            </Route> */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
