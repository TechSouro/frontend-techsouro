import axios from "axios";
import https from "https";

export const Api = axios.create({
  baseURL:
    "https://8aa9-2804-431-cfef-80ae-7c6c-1470-b379-d7f2.ngrok-free.app/api",
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    "ngrok-skip-browser-warning": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
