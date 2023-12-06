import axios from "axios";
import https from "https";

export const Api = axios.create({
  baseURL:
    "https://aabe-2804-431-cfef-80ae-6dd8-81e0-8ec1-7ffd.ngrok-free.app/api",
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    "ngrok-skip-browser-warning": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
