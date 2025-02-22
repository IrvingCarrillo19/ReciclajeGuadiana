import { Button, Card, TextInput } from "flowbite-react";
import BarChart from "../../components/barChart";
import TopPanel from "../../components/topPanel";
import useDashboard from "../../hooks/useDashboard";
import TableGenerator from "../../components/tableGenerator";
import {
  suppliersModal,
  suppliersTableHeaders,
  suppliersTableKeys,
} from "../../assets/suppliersConfig";
import EditModal from "../../components/editModal";
import { useEffect, useState } from "react";
import StatsService from "../../services/StatsService";

export default function Suppliers() {
  const { modalProps, tableProps, searchProps, handleAdd } =
    useDashboard("proveedor");
  const [top, setTop] = useState([]);
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const service = new StatsService();
      const data = await service.topProveedores();
      setTop(
        data.map((mat: any) => ({
          name: mat.nombre,
          description: "datos del semestre actual",
          value: "$" + mat.ganancias_totales,
        }))
      );

      const ingresosData = await service.proveedores_chart();
      const months =
        new Date().getMonth() < 6
          ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun"]
          : ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      setIngresos(
        ingresosData.map((ing: any) => ({
          name: ing.nombre,
          data: ing.ganancia.map((y: any, i: number) => ({ y, x: months[i] })),
        }))
      );
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full h-full flex flex-col items-end gap-4">
        {/* Stats ----------------------------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 w-full gap-4">
          <TopPanel title="Más vendidos" series={top} />
          <BarChart series={ingresos} />
        </div>

        {/* Table ----------------------------------------------------------------------------------------- */}
        <Card className="w-full border-gray-300 mt-5">
          <div className="flex justify-end gap-28 w-full">
            <TextInput
              {...searchProps}
              placeholder="Buscar por nombre"
              className="grow"
            />
            <Button gradientDuoTone="greenToBlue" onClick={handleAdd}>
              Agregar nuevo
            </Button>
          </div>
          <TableGenerator
            {...tableProps}
            searchFields="nombre"
            headers={suppliersTableHeaders}
            keys={suppliersTableKeys}
          />
        </Card>
      </div>

      {/* modal ----------------------------------------------------------------------------------------- */}
      <EditModal {...modalProps} title="proveedor" inputs={suppliersModal} />
    </>
  );
}
