import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import DashboardLayout from "./pages/layout/dashboardLayaout";
import Home from "./pages/dashboard/home";
import Materials from "./pages/dashboard/materials";
import Suppliers from "./pages/dashboard/suppliers";
import Reports from "./pages/dashboard/reports";

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
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
