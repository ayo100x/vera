import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import ProductPage from "./pages/product/productPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
