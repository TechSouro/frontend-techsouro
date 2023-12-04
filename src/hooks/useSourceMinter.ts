import axios from "axios";
import { useState } from "react";

export function useSourceMinter() {
  const [isLoading, setIsLoading] = useState(false);

  async function onEmission(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/emission", payload);
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  return { onEmission, isLoading };
}
