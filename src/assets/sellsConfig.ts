import { Input } from "../components/editModal";

export const sellsModal: Input[] = [
  { type: "id", name: "id" },
  {
    type: "combo_table",
    name: "materialID",
    label: "Material",
    placeholder: "nombre",
    required: true,
  },
  {
    type: "text",
    name: "destino",
    label: "Destino",
    placeholder: "Destino",
    required: true,
  },
  {
    type: "number",
    name: "total_kilos_vendidos",
    label: "Total de kilos vendidos",
    placeholder: "Total de kilos vendidos",
    required: true,
  },
  {
    type: "number",
    name: "ganancia_total",
    label: "Ganancia total",
    placeholder: "Ganancia total",
    required: true,
  },
];

export const sellsTableHeaders: string[] = [
  "Material",
  "destino",
  "Total de kilos vendidos",
  "Ganancia total",
];

export const sellsTableKeys: string[] = [
  "material.nombre",
  "destino",
  "total_kilos_vendidos",
  "ganancia_total",
];
