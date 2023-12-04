import { sourceMinterAddress } from "@/constants";
import { useSmartContext } from "@/contexts/SmartContext";
import { SourceMinter__factory } from "@/contracts";
import {
  IHybridPaymaster,
  PaymasterMode,
  SponsorUserOperationDto,
} from "@biconomy/paymaster";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function useSourceMinter() {
  const [isLoading, setIsLoading] = useState(false);
  const { smartAccount, signer } = useSmartContext();
  const contract = SourceMinter__factory.connect(sourceMinterAddress, signer!);

  async function onEmission() {
    setIsLoading(true);
    try {
      const res = await axios.post("/apis/emitir")
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return { onEmission, isLoading };
}
