import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export function useSourceMinter() {
  const [isLoading, setIsLoading] = useState(false);

  async function onEmission(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/emission", payload);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return { onEmission, isLoading };
}
