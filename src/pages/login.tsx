import { Avatar, Button, Card, Label, TextInput } from "flowbite-react";
import logo from "../assets/logo.svg";
import useStore from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import DotsBG from "../components/dotsBG";

export default function LoginPage() {
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("login");
    setLoggedIn(true);
    navigate("/dashboard");
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
              <Label htmlFor="email" value="Usuario" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="ejemplo@dominio.com"
              required
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Contraseña" />
            </div>
            <TextInput
              id="password"
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
