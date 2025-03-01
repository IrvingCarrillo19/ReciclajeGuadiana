import { Input } from "../components/editModal";

export const suppliersModal: Input[] = [
  { type: "id", name: "id" },
  {
    type: "text",
    name: "nombre",
    label: "Nombre",
    required: true,
    placeholder: "Nombre del proveedor",
  },
  {
    type: "text",
    name: "no_licencia_ambiental",
    label: "No. licencia ambiental",
    placeholder: "Número de licencia ambiental",
    required: true,
  },
  {
    type: "text",
    name: "domicilio",
    label: "Domicilio",
    placeholder: "Domicilio del proveedor",
    required: true,
  },
  {
    type: "text",
    name: "telefono",
    label: "Teléfono",
    placeholder: "Teléfono del proveedor",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Correo",
    placeholder: "Correo del proveedor",
    required: true,
  },
];

export const suppliersTableHeaders: string[] = [
  "Nombre",
  "Licencia ambiental",
  "Domicilio",
  "Teléfono",
  "Correo",
];

export const suppliersTableKeys: string[] = [
  "nombre",
  "no_licencia_ambiental",
  "domicilio",
  "telefono",
  "email",
];
