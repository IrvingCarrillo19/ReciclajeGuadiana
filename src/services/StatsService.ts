import pdfMake from "pdfmake/build/pdfmake";
import Service from "./service";
import pdfFonts from "pdfmake/build/vfs_fonts";

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
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/ventas-count`,
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

  async entregas_count(data: IntervalDto) {
    const response = await this.fetch(
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
    const response = await this.fetch(
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
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/ventas-chart`,
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

  async entregas_chart(data: IntervalDto) {
    const response = await this.fetch(
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
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/top/materiales`
    );
    return await response.json();
  }

  async topProveedores() {
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/top/proveedores`
    );
    return await response.json();
  }

  async materials_chart() {
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/materiales-ingresos`
    );
    return await response.json();
  }

  async proveedores_chart() {
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/proveedores-ingresos`
    );
    return await response.json();
  }

  async getTableData(data: TableData) {
    const response = await this.fetch(
      `${this.Env.HOST}/${this.name}/reporte-data`,
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

  async generatePDF(data: TableData) {
    const tableData = await this.getTableData(data);
    console.log(tableData);
    const docDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: Array(data.columns.length + 1).fill("*"),
            body: [
              ["Nombre", ...data.columns],
              ...tableData.map((row: any) => [
                row.nombre,
                ...data.columns.map((col: any) => row[col] || 0),
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
}
