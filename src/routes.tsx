import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import DashboardLayout from "./pages/layout/dashboardLayaout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<p>home</p>} />
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="material" element={<h1>Materiales</h1>} />
          <Route path="suppliers" element={<h1>Provedores</h1>} />
          <Route path="reports" element={<h1>Reportes</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
