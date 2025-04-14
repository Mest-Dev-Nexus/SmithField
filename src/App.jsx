import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./assets/layout/RootLayout";
import Home from "./assets/pages/Home";
import Shop from "./assets/pages/Shop";
import SupplyChainForm from "./assets/pages/SupplyChainForm";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Services from "./assets/pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/supply-chain" element={<SupplyChainForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
