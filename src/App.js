import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreateProduct from "./components/CreateProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/farmer">
          <Route path="create" element={<CreateProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
