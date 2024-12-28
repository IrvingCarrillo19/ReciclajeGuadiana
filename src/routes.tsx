import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<p>about</p>} />
      </Routes>
    </BrowserRouter>
  );
}
