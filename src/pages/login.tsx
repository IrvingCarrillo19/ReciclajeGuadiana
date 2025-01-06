import { Avatar, Button, Card, Label, TextInput } from "flowbite-react";
import logo from "../assets/logo.svg";
import useStore from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import DotsBG from "../components/dotsBG";
import LoginService from "../services/LoginService";
import Swal from "sweetalert2";

export default function LoginPage() {
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const service = new LoginService();
    const res = await service.login(data);
    if (!res?.message) {
      console.log(res);
      setLoggedIn(true, res.nombre, res.id);
      navigate("/dashboard");
    } else {
      Swal.fire("Error", res.message, "error");
    }
  };

  return (
    <div className="w-svw h-svh flex justify-center items-center">
      <DotsBG />
      <Card className="w-1/3 max-w-xl shadow-lg border-gray-300">
        <form
          className="flex w-full h-full justify-center items-center flex-col gap-4"
          onSubmit={handleLogin}
        >
          <Avatar
            img={(props) => <img {...props} src={logo} className="p-2" />}
            rounded
            bordered
            size="xl"
          />
          <h1>Reciclajes Guadiana S.A. de C.V.</h1>
          <div className="w-full">
            <div className="mb-2 block">
              <Label value="Usuario" />
            </div>
            <TextInput
              name="nombre"
              type="text"
              placeholder="Introduce tu usuario"
              required
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label value="Contraseña" />
            </div>
            <TextInput
              name="password"
              type="password"
              placeholder="Tu contraseña"
              required
            />
          </div>
          <Button gradientDuoTone="greenToBlue" type="submit" className="px-7">
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
