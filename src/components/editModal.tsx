import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import Service from "../services/service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useStore from "../store";
import Combofetch from "./comboFetch";

interface EditModalProps {
  open?: boolean;
  onClose?: () => void;
  title: string;
  service?: Service;
  customFetch?: (data: any) => void;
  currentItem?: any;
  inputs: Input[];
}

export interface Input {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  value?: any;
  options?: string[] | { name: string; value: string }[];
  fetch?: (a?: any) => any;
  dependsOn?: string;
}

export default function EditModal(props: EditModalProps) {
  const [open, setOpen] = useState(props.open);
  const [dependencies, setDependencies] = useState<any>({});

  useEffect(() => {
    if (props.inputs.some((input) => input.dependsOn)) {
      const deps = props.inputs
        .filter((input) => input.dependsOn)
        .map((input) => {
          if (input.dependsOn) return input.dependsOn.split("|");
        })
        .reduce((acc: any, dep: any) => {
          acc[dep[0]] = "";
          return acc;
        }, {});
      setDependencies(deps);
    }
  }, []);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    setDependencies((prev: any) =>
      Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
    );
    props.onClose && props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const service = props.service ?? { save: (a) => a };
      const res = props.customFetch
        ? await props.customFetch(data)
        : await service?.save(data);
      if (res) Swal.fire("Guardado", "El Elemento ha sido guardado", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Ocurrió un error al guardar el elemento", "error");
    } finally {
      handleClose();
    }
  };

  return (
    <Modal show={open} onClose={handleClose}>
      <Modal.Header>Guardar {props.title}</Modal.Header>
      <Modal.Body>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          {props.inputs.map((input, index) => (
            <InputGenerator
              key={"InputGenerator_" + props.title + "_" + index}
              {...input}
              value={input.name
                .replace("ID", ".id")
                .split(".")
                .reduce((acc, part) => acc && acc[part], props.currentItem)}
              {...(dependencies[input.name] || dependencies[input.name] === ""
                ? {
                    onChange: (e) => {
                      console.log(e.target.value);
                      setDependencies((prev: any) => ({
                        ...prev,
                        [input.name]: e.target.value,
                      }));
                    },
                  }
                : {})}
              deps={input?.dependsOn ? dependencies : {}}
            />
          ))}
          <div className="w-full flex justify-end">
            <Button gradientDuoTone="greenToBlue" type="submit">
              Guardar
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

function InputGenerator(
  props: Input & { onChange?: (e: any) => void; deps?: any }
) {
  if (props.dependsOn) {
    const dep = props.dependsOn.split("|");
    if (dep.length > 1 && props.deps[dep[0]] !== dep[1]) {
      return null;
    }
  }

  switch (props.type) {
    case "id":
      if (props.value)
        return (
          <input
            type="hidden"
            name={props.name}
            defaultValue={props.value ?? ""}
          />
        );
      else return null;

    case "user":
      const userID = useStore((state) => state.userId);
      return (
        <input
          type="hidden"
          name={props.name}
          defaultValue={props.value ?? userID}
        />
      );

    case "section":
      return (
        <div className="w-full">
          <h3 className="text-lg font-bold">{props.name}</h3>
        </div>
      );

    case "combo":
      return (
        <div className="w-full">
          <div className="mb-2 block">
            <Label value={props.label} />
          </div>
          <Select
            name={props.name}
            required={props.required}
            defaultValue={props.value ?? ""}
            onChange={props.onChange}
          >
            {props.options?.map((item: any) => {
              return (
                <option
                  key={`combo_option_${item?.value ?? item}`}
                  value={item?.value ?? item}
                >
                  {item?.name ?? item}
                </option>
              );
            })}
          </Select>
        </div>
      );

    case "combo_table":
      const [items, setItems] = useState([]);
      const [value, setValue] = useState(props.value);

      useEffect(() => {
        async function fetchItems() {
          const service = new Service(props.label?.toLowerCase() ?? "");
          const res = await service.get();
          setItems(res);
        }
        fetchItems();
      }, []);

      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      };

      return (
        <div className="w-full">
          <div className="mb-2 block">
            <Label value={props.label} />
          </div>
          <Select
            name={props.name}
            required={props.required}
            value={value ?? ""}
            onChange={handleChange}
          >
            {items?.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>
                  {item[props.placeholder ?? "nombre"]}
                </option>
              );
            })}
          </Select>
        </div>
      );

    case "combo_fetch":
      return <Combofetch {...props} />;

    default:
      return (
        <div>
          <div className="mb-2 block">
            <Label value={props.label} />
          </div>
          <TextInput
            name={props.name}
            type={props.type}
            placeholder={props.placeholder ?? props.name}
            required={props.required}
            defaultValue={props.value ?? ""}
            onChange={props.onChange}
          />
        </div>
      );
  }
}
