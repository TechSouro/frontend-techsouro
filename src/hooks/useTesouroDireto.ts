import { tesouroDiretoAddress } from "@/constants";
import { calculateGasLimit, getEthersProvider } from "@/utils";
import { useState } from "react";
import { TesouroDireto__factory } from "../../app/contracts";
import toast from "react-hot-toast";

export function useTesouroDireto() {
  const [isLoading, setIsLoading] = useState(false);
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const contract = TesouroDireto__factory.connect(
    tesouroDiretoAddress,
    signer!
  );

  async function onEmitTreasury(payload: any) {
    setIsLoading(true);
    try {
      const data = {
        _type: 1,
        _apy: 1000,
        _minInvestment: 1,
        _validThru: 365 * 10,
        _avlbTokens: 100,
        _creation: 0,
      };

      const gasLimit = await calculateGasLimit(contract, "emitTreasury", [
        data,
      ]);
      const transactionAprove = await contract.emitTreasury(data, { gasLimit });
      console.log("transactionAprove: ", transactionAprove);
      const tx = await transactionAprove.wait();
      console.log("txTransactionAprove: ", tx);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onOpenPublicOffer(tokenId: number) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "openPublicOffer", [
        tokenId,
      ]);
      const transactionAprove = await contract.openPublicOffer(tokenId, {
        gasLimit,
      });
      console.log("transactionAprove: ", transactionAprove);
      const tx = await transactionAprove.wait();
      console.log("txTransactionAprove: ", tx);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return { onOpenPublicOffer, onEmitTreasury, isLoading };
}
