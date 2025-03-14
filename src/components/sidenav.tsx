import { Sidebar, Avatar } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { IoLayers, IoIdCard } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

export default function Sidenav() {
  const navigate = useNavigate();

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="pt-5 flex flex-col justify-center items-center">
            <Avatar
              img={(props) => (
                <div className="rounded-full p-2 overflow-hidden bg-white">
                  <img {...props} src={logo} />
                </div>
              )}
              size="md"
            />
            <h1 className="font-bold text-white my-5">
              Reciclajes Guadiana S.A. de C.V.
            </h1>
          </div>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            icon={HiHome}
            active={location.pathname.includes("home")}
            onClick={() => navigate("/dashboard/home")}
          >
            Inicio
          </Sidebar.Item>
          <Sidebar.Item
            icon={IoLayers}
            active={location.pathname.includes("material")}
            onClick={() => navigate("/dashboard/material")}
          >
            Materiales
          </Sidebar.Item>
          <Sidebar.Item
            icon={IoIdCard}
            active={location.pathname.includes("suppliers")}
            onClick={() => navigate("/dashboard/suppliers")}
          >
            Provedores
          </Sidebar.Item>
          <Sidebar.Item
            icon={FaTruck}
            active={location.pathname.includes("deliveries")}
            onClick={() => navigate("/dashboard/deliveries")}
          >
            Entregas
          </Sidebar.Item>
          <Sidebar.Item
            icon={FaMoneyBillWave}
            active={location.pathname.includes("sells")}
            onClick={() => navigate("/dashboard/sells")}
          >
            Ventas
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
