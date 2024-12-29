import { TextInput } from "flowbite-react";
import useStore from "../store";
import { useNavigate } from "react-router";

export default function Header() {
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="w-full py-4 shadow flex justify-end bg-white items-center border-b border-gray-200">
      <TextInput placeholder="buscar" />
      <span
        className="hover:text-green-400 hover:cursor-pointer mx-8"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </span>
    </div>
  );
}
