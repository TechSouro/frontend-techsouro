import axios from "axios";
import https from "https";

export const Api = axios.create({
  baseURL: "API",
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
