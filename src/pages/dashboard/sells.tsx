import { Button, Card, TextInput } from "flowbite-react";
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
