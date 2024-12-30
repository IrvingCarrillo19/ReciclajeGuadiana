import { Button, Table } from "flowbite-react";

export default function Materials() {
  return (
    <div className="w-full h-full flex flex-col items-end gap-4">
      <div className="grid grid-cols-2"></div>
      <Button gradientDuoTone="greenToBlue">Agregar nuevo</Button>
      <div className="overflow-x-scroll w-full">
        <Table>
          <Table.Head>
            <Table.HeadCell>Tipo</Table.HeadCell>
            <Table.HeadCell>Valor unitario</Table.HeadCell>
            <Table.HeadCell>Valor de venta</Table.HeadCell>
            <Table.HeadCell>Acciones</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-semibold">Material 1</Table.Cell>
              <Table.Cell>$100</Table.Cell>
              <Table.Cell>$150</Table.Cell>
              <Table.Cell>
                <div className="flex gap-4">
                  <Button color="blue">Editar</Button>
                  <Button color="failure">Eliminar</Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
