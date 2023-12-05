import { Api } from "@/provider";

async function getPrimarySales() {
  return await Api.get("/primarysale");
}

async function getTreasurys() {
  return await Api.get("/treasurys");
}

async function getSecondarySales() {
  return await Api.get("/secondarysale");
}

async function getTransfers() {
  return await Api.get("/transfers");
}

export const TitlesService = {
  getPrimarySales,
  getTreasurys,
  getSecondarySales,
  getTransfers,
};
