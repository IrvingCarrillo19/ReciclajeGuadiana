import pdfMake from "pdfmake/build/pdfmake";
import Service from "./service";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.vfs;

export interface IntervalDto {
  start: Date;
  end: Date;
  type: "day" | "week" | "month" | "semester" | "year" | "custom";
}

export interface TableData {
  type: "semester" | "year";
  time: string;
  columns: ("merma" | "peso_final" | "ganancia")[];
}
export default class StatsService extends Service {
  constructor() {
    super("statistics");
  }

  async ventas_count(data: IntervalDto) {
    const response = await fetch(`${this.Env.HOST}/${this.name}/ventas-count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async entregas_count(data: IntervalDto) {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/entregas-count`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  async ganancias_count(data: IntervalDto) {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/ganancias-count`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  async ventas_chart(data: IntervalDto) {
    const response = await fetch(`${this.Env.HOST}/${this.name}/ventas-chart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async entregas_chart(data: IntervalDto) {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/entregas-chart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  async topMaterials() {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/top/materiales`
    );
    return await response.json();
  }

  async topProveedores() {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/top/proveedores`
    );
    return await response.json();
  }

  async materials_chart() {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/materiales-ingresos`
    );
    return await response.json();
  }

  async proveedores_chart() {
    const response = await fetch(
      `${this.Env.HOST}/${this.name}/proveedores-ingresos`
    );
    return await response.json();
  }

  async getTableData(data: TableData) {
    const response = await fetch(`${this.Env.HOST}/${this.name}/reporte-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async generatePDF(data: TableData) {
    const tableData = await this.getTableData(data);

    const columns = calculateCols(data.type, data.time) ?? [];

    const docDefinition: TDocumentDefinitions = {
      pageSize: "LETTER",
      pageOrientation: "landscape",
      pageMargins: 10,
      content: [
        {
          table: {
            headerRows: 1,
            widths: ["*", ...Array(columns.length).fill("auto"), "*", "*"],
            body: [
              [
                { text: "Proveedor", fontSize: 10 },
                ...columns.map((col) => ({ text: col, fontSize: 10 })),
                { text: "Merma Total", fontSize: 10 },
                { text: "Material Total", fontSize: 10 },
              ],
              ...tableData.map((row: any) => [
                { text: row.nombre, fontSize: 10 },
                ...row.ganancia.map((g: any) => ({ text: g, fontSize: 10 })),
                {
                  text: row.merma.reduce(
                    (acc: any, prev: any) => Number(prev) + Number(acc) + "",
                    "0"
                  ),
                  fontSize: 10,
                },
                {
                  text: row.ganancia.reduce(
                    (acc: any, prev: any) => Number(prev) + Number(acc) + "",
                    "0"
                  ),
                  fontSize: 10,
                },
              ]),
            ],
          },
        },
      ],
    };

    const doc = pdfMake.createPdf(docDefinition);
    doc.getBlob((blob) => {
      const pdfUrl = URL.createObjectURL(blob);

      // Abrir en una nueva ventana o un WebView de Tauri
      window.open(pdfUrl);
    });
  }

  async getYears() {
    const response = await fetch(`${this.Env.HOST}/${this.name}/years`);
    return await response.json();
  }

  async getSemesters() {
    const response = await fetch(`${this.Env.HOST}/${this.name}/semesters`);
    return await response.json();
  }
}

function calculateCols(type: string, time: string) {
  switch (type) {
    case "semester":
      const semesterNumber = time.split("-")[1];
      return semesterNumber === "1"
        ? ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]
        : [
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ];
    case "year":
      return [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
    default:
      return;
  }
}
