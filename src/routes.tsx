import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import DashboardLayout from "./pages/layout/dashboardLayout";
import Home from "./pages/dashboard/home";
import Materials from "./pages/dashboard/materials";
import Suppliers from "./pages/dashboard/suppliers";
import Deliveries from "./pages/dashboard/deliveries";
import Sells from "./pages/dashboard/sells";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="material" element={<Materials />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="deliveries" element={<Deliveries />} />
          <Route path="sells" element={<Sells />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
