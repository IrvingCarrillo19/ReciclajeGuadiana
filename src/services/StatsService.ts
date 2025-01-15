import Service from "./service";

interface IntervalDto {
  start: Date;
  end: Date;
  type: "day" | "week" | "month" | "semester" | "year" | "custom";
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
}
