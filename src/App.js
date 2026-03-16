
import HomePage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router,Routes,Route, matchRoutes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
   
    <Router>
        
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/category/:categoryId" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
       <Route path="/contact" element={<ContactPage/>}/>
       <Route path="*" element={<ErrorPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/register" element={<RegisterPage/>}/>
       <Route path="/orders" element={<OrderPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
