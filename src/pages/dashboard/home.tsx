import NumPanel from "../../components/numPanel";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <NumPanel title="Proveedores Activos" value="7" />
      <NumPanel />
      <NumPanel />
    </div>
  );
}
