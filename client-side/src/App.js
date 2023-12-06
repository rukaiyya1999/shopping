import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
// import './App.css';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<Product />}></Route>
          <Route
            exact
            path="/products/:category"
            element={<ProductList />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          ;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
