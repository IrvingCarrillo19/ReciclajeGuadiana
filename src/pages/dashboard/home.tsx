import NumPanel from "../../components/numPanel";
import { IoDocuments } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { Card, Select, Table } from "flowbite-react";
import BarChart from "../../components/barChart";
import StatsService from "../../services/StatsService";
import { useEffect, useState } from "react";

export default function Home() {
  const statsService = new StatsService();
  const [ventas, setVentas] = useState(0);
  const [entregas, setEntregas] = useState(0);
  const [ganancias, setGanancias] = useState(0);

  useEffect(() => {
    statsService
      .ventas_count({
        start: new Date(),
        end: new Date(),
        type: "day",
      })
      .then((data) => {
        setVentas(data);
      });
    statsService
      .entregas_count({
        start: new Date(),
        end: new Date(),
        type: "day",
      })
      .then((data) => {
        setEntregas(data);
      });
    statsService
      .ganancias_count({
        start: new Date(),
        end: new Date(),
        type: "day",
      })
      .then((data) => {
        setGanancias(data);
      });
  });
  return (
    <div className="grid grid-cols-3 gap-4">
      <NumPanel
        icon={<IoDocuments />}
        title="Ventas de hoy"
        value={ventas.toLocaleString()}
      />
      <NumPanel
        icon={<BiSolidDashboard />}
        title="Entregas de hoy"
        value={entregas.toLocaleString()}
      />
      <NumPanel
        icon={<MdOutlineBarChart />}
        title="Ganancias de hoy"
        value={"$" + ganancias.toLocaleString()}
        color="success"
      />
      <Card className="col-span-3 border-gray-300">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex justify-end items-center">
            <Select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </Select>
          </div>
          <BarChart />
          <BarChart />
          <div className="col-span-2">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Proveedor</Table.HeadCell>
                <Table.HeadCell>Enero</Table.HeadCell>
                <Table.HeadCell>Febrero</Table.HeadCell>
                <Table.HeadCell>Marzo</Table.HeadCell>
                <Table.HeadCell>Abril</Table.HeadCell>
                <Table.HeadCell>Mayo</Table.HeadCell>
                <Table.HeadCell>Junio</Table.HeadCell>
                <Table.HeadCell>Merma General</Table.HeadCell>
                <Table.HeadCell>Material total</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <Table.Row
                      key={`reporte_${i}`}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {"Proveedor A"}
                      </Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                      <Table.Cell>$1,000</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
