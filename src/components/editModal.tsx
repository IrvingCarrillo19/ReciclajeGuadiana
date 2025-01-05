import { Button, Label, Modal, TextInput } from "flowbite-react";
import Service from "../services/service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface EditModalProps {
  open?: boolean;
  onClose?: () => void;
  title: string;
  service: Service;
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
}

export default function EditModal(props: EditModalProps) {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    props.onClose && props.onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const res = await props.service.save(data);
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
              value={props.currentItem?.[input.name]}
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

function InputGenerator(props: Input) {
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
          />
        </div>
      );
  }
}
