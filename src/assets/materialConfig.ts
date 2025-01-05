import { Input } from "../components/editModal";

export const materialsModal: Input[] = [
  { type: "id", name: "id" },
  {
    type: "text",
    name: "nombre",
    label: "Nombre",
    required: true,
    placeholder: "Nombre del material",
  },
  {
    type: "number",
    name: "valor_unitario",
    label: "Valor unitario",
    placeholder: "Valor unitario del material",
    required: true,
  },
  {
    type: "number",
    name: "valor_venta",
    label: "Valor de venta",
    placeholder: "Valor de venta del material",
    required: true,
  },
];

export const materialsTableHeaders: string[] = [
  "Nombre",
  "Valor unitario",
  "Valor de venta",
];

export const materialsTableKeys: string[] = [
  "nombre",
  "valor_unitario",
  "valor_venta",
];
