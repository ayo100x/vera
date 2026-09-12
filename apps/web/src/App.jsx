import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import ProductPage from "./pages/product/productPage";
import LookPage from "./pages/look/LookPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/look/:id" element={<LookPage />} />
    </Routes>
  );
}

export default App;
