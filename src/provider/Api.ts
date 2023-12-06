import axios from "axios";
import https from "https";

export const Api = axios.create({
  baseURL:
    "https://b71b-2804-431-cfef-80ae-9b1-5617-a4cc-8a7a.ngrok-free.app",
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    "ngrok-skip-browser-warning": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
