import axios from "axios";
import { useState } from "react";

export function useOpenMarket() {
  const [isLoading, setIsLoading] = useState(false);

  async function onPurchasePrimary(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/purchase-primary", payload);
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onBuySecondary(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/buy-secondary", payload);
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onSellMyUnits(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/sell-units", payload);
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onSafeTransferFrom(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/safe-transfer", payload);
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onRetrieveInvestment(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/retrieve", payload);
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  return {
    onPurchasePrimary,
    onBuySecondary,
    onSellMyUnits,
    onSafeTransferFrom,
    onRetrieveInvestment,
    isLoading,
  };
}
