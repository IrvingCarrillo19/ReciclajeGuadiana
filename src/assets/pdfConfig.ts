import { Input } from "../components/editModal";
import StatsService from "../services/StatsService";

export const pdfModal: Input[] = [
  {
    type: "combo",
    name: "type",
    label: "Tipo",
    value: "semester",
    options: [
      { name: "Semestre", value: "semester" },
      { name: "Año", value: "year" },
    ],
    required: true,
  },
  {
    type: "combo_fetch",
    name: "time",
    label: "Semestre",
    required: true,
    fetch: async () => await new StatsService().getSemesters(),
    dependsOn: "type|semester",
  },
  {
    type: "combo_fetch",
    name: "time",
    label: "Año",
    required: true,
    fetch: async () => await new StatsService().getYears(),
    dependsOn: "type|year",
  },
];
