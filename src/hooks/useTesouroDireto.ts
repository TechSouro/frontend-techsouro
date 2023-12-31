import { useState } from "react";
import axios from "axios";

export function useTesouroDireto() {
  const [isLoading, setIsLoading] = useState(false);

  async function onEmitTreasury(payload: any) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/emit-treasury", payload);
      setIsLoading(false);
      console.log(data);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  async function onOpenPublicOffer(tokenId: number) {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/apis/open-public", { tokenId });
      setIsLoading(false);
      return data.hash;
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      throw new Error(error);
    }
  }

  return { onOpenPublicOffer, onEmitTreasury, isLoading };
}
