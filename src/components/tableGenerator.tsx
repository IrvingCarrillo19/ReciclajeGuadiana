import { Button, Table } from "flowbite-react";
import Service from "../services/service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useSearch from "../hooks/useSearch";

interface TableGeneratorProps {
  headers: string[];
  keys: string[];
  service: Service;
  onEdit?: (item: any) => void;
  search?: string;
  searchFields?: string;
  refresh?: {};
}

export default function TableGenerator(props: TableGeneratorProps) {
  const [data, setData] = useState([]);
  const filteredData = useSearch({
    data,
    search: props.search ?? "",
    searchFields: props.searchFields ?? "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [props.refresh]);

  async function fetchData() {
    try {
      const res = await props.service.get();
      setData(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = (item: any) => {
    props.onEdit && props.onEdit(item);
  };

  const handleDelete = (item: any) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await props.service.delete(item.id);
          if (res) {
            Swal.fire("Eliminado", "El elemento ha sido eliminado", "success");
            setData(data.filter((i: any) => i.id !== item.id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire(
            "Error",
            "Ocurrió un error al eliminar el elemento",
            "error"
          );
        } finally {
          fetchData();
        }
      }
    });
  };

  return (
    <div className="overflow-x-scroll w-full">
      <Table>
        <Table.Head>
          {props.headers.map((header, index) => (
            <Table.HeadCell key={"TableGenerator_" + header + "_" + index}>
              {header}
            </Table.HeadCell>
          ))}
          <Table.HeadCell>Acciones</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {filteredData?.map((item: any, index: number) => {
            return (
              <Table.Row key={`item_${item.id}_${index}`}>
                {props.keys.map((key, index) => (
                  <Table.Cell key={`item_${item.id}_${index}`}>
                    {item[key]}
                  </Table.Cell>
                ))}
                <Table.Cell>
                  <div className="flex gap-4">
                    <Button color="blue" onClick={() => handleEdit(item)}>
                      Editar
                    </Button>
                    <Button color="failure" onClick={() => handleDelete(item)}>
                      Eliminar
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
