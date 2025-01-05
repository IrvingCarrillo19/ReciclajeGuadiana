import { Outlet } from "react-router";
import DotsBG from "../../components/dotsBG";
import Header from "../../components/header";
import Sidenav from "../../components/sidenav";

export default function DashboardLayout() {
  return (
    <div className="flex w-svw h-svh">
      <Sidenav />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4 overflow-scroll">
          <DotsBG />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
