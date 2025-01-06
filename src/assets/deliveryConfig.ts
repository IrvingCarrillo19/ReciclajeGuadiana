import { Input } from "../components/editModal";

export const deliveriesModal: Input[] = [
  { type: "id", name: "id" },
  {
    type: "number",
    name: "peso_total",
    label: "Peso total",
    required: true,
    placeholder: "Peso total de la entrega en kg",
  },
  {
    type: "text",
    name: "clasificacion",
    label: "Clasificación",
    placeholder: "Clasificación de la entrega",
    required: true,
  },
  {
    type: "number",
    name: "merma",
    label: "Merma",
    placeholder: "Merma de la entrega en kg",
    required: true,
  },
  {
    type: "text",
    name: "numero_ticket",
    label: "Número de ticket",
    placeholder: "Número de ticket de la entrega",
    required: true,
  },
  {
    type: "number",
    name: "peso_final",
    label: "Peso final",
    placeholder: "Peso final de la entrega en kg",
    required: true,
  },
  {
    type: "number",
    name: "ganancia",
    label: "Ganancia",
    placeholder: "Ganancia de la entrega",
    required: true,
  },
  {
    type: "combo_table",
    name: "proveedorID",
    label: "Proveedor",
    placeholder: "nombre",
    required: true,
  },
  {
    type: "combo_table",
    name: "materialID",
    label: "Material",
    placeholder: "nombre",
    required: true,
  },
  //seccion de reporte para la entrega -------------
  {
    type: "section",
    name: "Reporte",
  },
  {
    type: "number",
    name: "total_kilos_vendidos",
    label: "Total kilos vendidos",
    placeholder: "Total kilos vendidos",
    required: true,
  },
  {
    type: "number",
    name: "ganancia_total",
    label: "Ganancia total",
    placeholder: "Ganancia total",
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
    type: "combo",
    name: "tipo_reporte",
    label: "Tipo de reporte",
    options: ["Diario"],
  },
  {
    type: "user",
    name: "usuarioID",
  },
];

export const deliveriesTableHeaders: string[] = [
  "Número de ticket",
  "Material",
  "Proveedor",
  "Peso final",
  "Ganancia",
  "Fecha",
];

export const deliveriesTableKeys: string[] = [
  "numero_ticket",
  "material.id",
  "provedor.id",
  "peso_final",
  "ganancia",
  "createdAt",
];
