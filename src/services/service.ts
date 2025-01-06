import Env from "../config/env";
import { fetch } from "@tauri-apps/plugin-http";

export default class Service {
  Env: Env;
  name: string;
  fetch: any;

  constructor(name: string) {
    this.Env = new Env();
    this.name = name;
    this.fetch = fetch;
  }

  async get() {
    const response = await fetch(`${this.Env.HOST}/${this.name}`, {
      method: "GET",
    });
    return await response.json();
  }

  async save(data: any) {
    const response = await fetch(`${this.Env.HOST}/${this.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async delete(id: string) {
    const response = await fetch(`${this.Env.HOST}/${this.name}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}
