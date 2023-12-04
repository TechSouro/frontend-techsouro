import { useState } from "react";
import axios from "axios";

export function useTesouroDireto() {
  const [isLoading, setIsLoading] = useState(false);

  async function onEmitTreasury(payload: any) {
    setIsLoading(true);
    try {
      await axios.post("/apis/emit-treasury", payload);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onOpenPublicOffer(tokenId: number) {
    setIsLoading(true);
    try {
      await axios.post("/apis/open-public", { tokenId });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  return { onOpenPublicOffer, onEmitTreasury, isLoading };
}
