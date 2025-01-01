import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainView from "./MainView";
import PaymentView from "./PaymentVew";
import { SearchProvider } from "../utils/context/SearchContext";
import { CartProvider } from "../utils/context/CartContext";
import { ProductSelectedProvider } from "../utils/context/ProductSelectedContext";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <ProductSelectedProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/payment" element={<PaymentView />} />
            </Routes>
          </BrowserRouter>
        </ProductSelectedProvider>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
