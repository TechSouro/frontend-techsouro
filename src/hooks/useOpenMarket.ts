import { openMarketAddress } from "@/constants";
import { useSmartContext } from "@/contexts/SmartContext";
import { OpenMarket__factory } from "@/contracts";
import {
  IHybridPaymaster,
  PaymasterMode,
  SponsorUserOperationDto,
} from "@biconomy/paymaster";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function useOpenMarket() {
  const [isLoading, setIsLoading] = useState(false);
  const { smartAccount, signer } = useSmartContext();
  const contract = OpenMarket__factory.connect(openMarketAddress, signer!);

  async function onPurchasePrimary(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/purchase-primary", payload);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onBuySecondary(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/buy-secondary", payload);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onSellMyUnits(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/sell-units", payload);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onSafeTransferFrom(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/safe-transfer", payload);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onRetrieveInvestment(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/retrieve", payload);
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
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
