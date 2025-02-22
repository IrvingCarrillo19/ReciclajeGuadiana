import { Button, TextInput } from "flowbite-react";
import useStore from "../store";
import { useNavigate } from "react-router";
import StatsService from "../services/StatsService";

export default function Header() {
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false, "", "");
    navigate("/");
  };

  const handleGeneratePDF = async () => {
    const statsService = new StatsService();
    await statsService.generatePDF({
      type: "semester",
      time: "2025-1",
      columns: ["merma", "peso_final", "ganancia"],
    });
  };

  return (
    <div className="w-full py-4 shadow flex justify-end bg-white items-center border-b border-gray-200">
      <Button
        gradientDuoTone="greenToBlue"
        className="mx-8"
        onClick={handleGeneratePDF}
      >
        Generar Reporte
      </Button>
      <span
        className="hover:text-green-400 hover:cursor-pointer mx-8"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </span>
    </div>
  );
}
