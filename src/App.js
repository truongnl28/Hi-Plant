import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateProduct from "./components/CreateProduct";
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';
import productsData from "./share/productData";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/farmer">
          <Route path="create" element={<CreateProduct />} />
        </Route>
        <Route path="/product/:productName" element={<ProductDetails products={productsData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
