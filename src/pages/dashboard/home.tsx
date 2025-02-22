import NumPanel from "../../components/numPanel";
import { IoDocuments } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { Card, Select, Table } from "flowbite-react";
import BarChart from "../../components/barChart";
import StatsService, { type IntervalDto } from "../../services/StatsService";
import { useEffect, useState } from "react";

interface Proveedor {
  nombre: string;
  ganancia: string[];
  merma: string[];
  peso_final: string[];
}

export default function Home() {
  const statsService = new StatsService();
  const [ventas, setVentas] = useState(0);
  const [entregas, setEntregas] = useState(0);
  const [ganancias, setGanancias] = useState(0);
  const [ventasData, setVentasData] = useState([]);
  const [entregasData, setEntregasData] = useState([]);
  const [type, setType] = useState<IntervalDto["type"]>("day");

  const [proveedores, setProveedores] = useState<Proveedor[]>([]);

  const months =
    new Date().getMonth() < 6
      ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun"]
      : ["Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

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
    changeCharts("day");
    statsService.proveedores_chart().then((data) => {
      setProveedores(data);
    });
  }, []);

  const changeCharts = (type: IntervalDto["type"]) => {
    statsService
      .ventas_chart({
        start: new Date(),
        end: new Date(),
        type: type,
      })
      .then((data) => {
        setVentasData(data);
        console.log(data);
      });
    statsService
      .entregas_chart({
        start: new Date(),
        end: new Date(),
        type: type,
      })
      .then((data) => {
        setEntregasData(data);
      });
  };

  useEffect(() => {
    changeCharts(type);
  }, [type]);

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
            <Select
              onChange={(e) => setType(e.target.value as IntervalDto["type"])}
            >
              <option value="day">Hoy</option>
              <option value="week">Esta semana</option>
              <option value="month">Este mes</option>
              <option value="semester">Este semestre</option>
              <option value="year">Este año</option>
            </Select>
          </div>
          <BarChart series={ventasData} title="Ventas" />
          <BarChart series={entregasData} title="Entregas" />
          <div className="col-span-2">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Proveedor</Table.HeadCell>
                {months.map((month) => (
                  <Table.HeadCell key={month}>{month}</Table.HeadCell>
                ))}
                <Table.HeadCell>Merma General</Table.HeadCell>
                <Table.HeadCell>Material total</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {proveedores.map((p, i) => {
                  return (
                    <Table.Row
                      key={`reporte_${i}`}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {p.nombre}
                      </Table.Cell>
                      {p.ganancia.map((g, i) => (
                        <Table.Cell key={`ganancias_${i}`}>{g}</Table.Cell>
                      ))}
                      <Table.Cell>
                        {p.merma.reduce(
                          (acc, prev) => Number(prev) + Number(acc) + "",
                          "0"
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        {p.ganancia.reduce(
                          (acc, prev) => Number(prev) + Number(acc) + "",
                          "0"
                        )}
                      </Table.Cell>
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
