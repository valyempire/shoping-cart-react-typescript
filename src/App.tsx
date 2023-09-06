import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/cart";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Shop} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={Cart} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
};
