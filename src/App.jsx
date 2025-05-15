import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./assets/layout/RootLayout";
import AdminLayout from "./assets/layout/AdminLayout";
import Home from "./assets/pages/Home";
import Shop from "./assets/pages/Shop";
import SupplyChainForm from "./assets/pages/supplyChainForm";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Services from "./assets/pages/Services";
import Dashboard from "./assets/pages/Admin/Dashboard";
import AddProduct from "./assets/pages/Admin/AddProducts";
import AllProducts from "./assets/pages/Admin/AllProducts";
import Edit  from "./assets/pages/Admin/Edit";
import FormSubmissions from "./assets/pages/Admin/FormSubmissions";
import  Login  from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import UserLogin from "./assets/pages/UserLogin";
import UserSignup from "./assets/pages/UserSignup";
import UserForgotPassword from "./assets/pages/UserForgotPassword";
import UserResetPassword from "./assets/pages/UserResetPassword";
import Orders from "./assets/pages/Admin/Orders";

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
          <Route path="/adminlogin" element={< Login />} />
          <Route path="/adminsignup" element={<Signup />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={< AllProducts />} />
          <Route path="/admin/edit" element={< Edit />} />
          <Route path="/admin/forms" element={< FormSubmissions />} />
        </Route>
      </Routes>

      <Routes>
      <Route path="login" element={<UserLogin />} />
      <Route path="signup" element={<UserSignup />} />
      <Route path="forgot-password" element={<UserForgotPassword />} />
      <Route path="reset-password/:token" element={<UserResetPassword />} />
    </Routes>
     
    </BrowserRouter>

    
  );
}

export default App;

