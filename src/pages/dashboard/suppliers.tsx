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

export default function Suppliers() {
  const { modalProps, tableProps, searchProps, handleAdd } =
    useDashboard("proveedor");

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
