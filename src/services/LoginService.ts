import Service from "./service";

export default class LoginService extends Service {
  constructor() {
    super("usuario");
  }

  async login(data: any) {
    const response = await fetch(`${this.Env.HOST}/${this.name}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
