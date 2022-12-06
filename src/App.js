import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/ProductPage/ProductPage";
import Nav from "./components/Nav/Nav";

function App() {

    // const addToShoppingChard = () => {
    //     ShoppingBasket.push()
    // }
    // const ShoppingBasket = []
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/products" element={ <Products/> }/>
        <Route path="/products/:id" element={ <ProductPage/> }/>
      </Routes>
    </>
  );
}

export default App;
