import { Sidebar, Navbar, Avatar, TextInput } from "flowbite-react";
import { Outlet, useNavigate } from "react-router";
import { HiHome } from "react-icons/hi";
import { IoLayers, IoAnalyticsSharp, IoIdCard } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import DotsBG from "../../components/dotsBG";

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex w-svw h-svh">
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
              icon={IoAnalyticsSharp}
              active={location.pathname.includes("reports")}
              onClick={() => navigate("/dashboard/reports")}
            >
              Reportes
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex flex-col w-full">
        <div className="w-full py-4 shadow flex justify-end bg-white items-center border-b border-gray-200">
          <TextInput placeholder="buscar" />
          <span className="hover:text-green-400 hover:cursor-pointer mx-8">
            Cerrar Sesión
          </span>
        </div>
        <main className="flex-1 p-4 overflow-scroll">
          <DotsBG />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
