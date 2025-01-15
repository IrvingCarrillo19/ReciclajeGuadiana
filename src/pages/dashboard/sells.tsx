import { Button, Card, TextInput } from "flowbite-react";
import BarChart from "../../components/barChart";
import TopPanel from "../../components/topPanel";
import TableGenerator from "../../components/tableGenerator";
import EditModal from "../../components/editModal";
import useDashboard from "../../hooks/useDashboard";
import {
  sellsModal,
  sellsTableHeaders,
  sellsTableKeys,
} from "../../assets/sellsConfig";

export default function Sells() {
  const { modalProps, tableProps, searchProps, handleAdd } =
    useDashboard("reporte");

  return (
    <>
      <div className="w-full h-full flex flex-col items-end gap-4">
        {/* Stats ----------------------------------------------------------------------------------------- */}
        <div className="grid grid-cols-2 w-full gap-4">
          <TopPanel
            title="Más vendidos"
            series={[
              { name: "material 1", description: "$3050 vendido", value: 50 },
              { name: "material 2", description: "$3050 vendido", value: 50 },
              { name: "material 3", description: "$3050 vendido", value: 50 },
            ]}
          />
          <BarChart />
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
            searchFields="material.nombre provedor.nombre numero_ticket createdAt"
            headers={sellsTableHeaders}
            keys={sellsTableKeys}
          />
        </Card>
      </div>

      {/* modal ----------------------------------------------------------------------------------------- */}
      <EditModal {...modalProps} title="entrega" inputs={sellsModal} />
    </>
  );
}
