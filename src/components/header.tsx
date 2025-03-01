import { Button } from "flowbite-react";
import useStore from "../store";
import { useNavigate } from "react-router";
import StatsService from "../services/StatsService";
import EditModal from "./editModal";
import { pdfModal } from "../assets/pdfConfig";
import { useState } from "react";

export default function Header() {
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false, "", "");
    navigate("/");
  };

  const handleGeneratePDF = async (data: any) => {
    const statsService = new StatsService();
    const reqData = { ...data, columns: ["merma", "ganancia"] };
    return await statsService.generatePDF(reqData);
  };

  return (
    <div className="w-full py-4 shadow flex justify-end bg-white items-center border-b border-gray-200">
      <Button
        gradientDuoTone="greenToBlue"
        className="mx-8"
        onClick={() => setOpen(true)}
      >
        Generar Reporte
      </Button>
      <span
        className="hover:text-green-400 hover:cursor-pointer mx-8"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </span>

      <EditModal
        open={open}
        title="Generar Reporte"
        customFetch={handleGeneratePDF}
        onClose={() => setOpen(false)}
        inputs={pdfModal}
      />
    </div>
  );
}
