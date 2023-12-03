import { tesouroDiretoAddress } from "@/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSmartContext } from "@/contexts/SmartContext";
import {
  IHybridPaymaster,
  SponsorUserOperationDto,
  PaymasterMode,
} from "@biconomy/paymaster";
import { TesouroDireto__factory } from "@/contracts";

export function useTesouroDireto() {
  const [isLoading, setIsLoading] = useState(false);
  const { smartAccount, signer } = useSmartContext();
  const contract = TesouroDireto__factory.connect(
    tesouroDiretoAddress,
    signer!
  );

  async function onEmitTreasury(payload: any) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const data = {
        _type: 1,
        _apy: 1000,
        _minInvestment: 1,
        _validThru: 365 * 10,
        _avlbTokens: 100,
        _creation: 0,
      };

      const minTx = await contract.populateTransaction.emitTreasury(data);
      console.log(minTx);
      const tx1 = {
        to: tesouroDiretoAddress,
        data: minTx.data,
      };
      console.log(smartAccount);
      let userOp = await smartAccount.buildUserOp([tx1]);
      console.log(userOp);
      const biconomyPaymaster =
        smartAccount.paymaster as IHybridPaymaster<SponsorUserOperationDto>;
      let paymasterServiceData: SponsorUserOperationDto = {
        mode: PaymasterMode.SPONSORED,
        smartAccountInfo: {
          name: "BICONOMY",
          version: "2.0.0",
        },
      };
      if (!userOp) return;
      const paymasterAndDataResponse =
        await biconomyPaymaster.getPaymasterAndData(
          userOp,
          paymasterServiceData
        );
      console.log(paymasterAndDataResponse);
      userOp.paymasterAndData = paymasterAndDataResponse.paymasterAndData;

      const userOpResponse = await smartAccount.sendUserOp(userOp);
      console.log("userOpHash", userOpResponse);
      const response = await userOpResponse?.wait(1);
      console.log("txHash", response?.receipt.transactionHash);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onOpenPublicOffer(tokenId: number) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.openPublicOffer(tokenId);
      console.log(minTx);
      const tx1 = {
        to: tesouroDiretoAddress,
        data: minTx.data,
      };
      console.log(smartAccount);
      let userOp = await smartAccount.buildUserOp([tx1]);
      console.log(userOp);
      const biconomyPaymaster =
        smartAccount.paymaster as IHybridPaymaster<SponsorUserOperationDto>;
      let paymasterServiceData: SponsorUserOperationDto = {
        mode: PaymasterMode.SPONSORED,
        smartAccountInfo: {
          name: "BICONOMY",
          version: "2.0.0",
        },
      };
      if (!userOp) return;
      const paymasterAndDataResponse =
        await biconomyPaymaster.getPaymasterAndData(
          userOp,
          paymasterServiceData
        );
      console.log(paymasterAndDataResponse);
      userOp.paymasterAndData = paymasterAndDataResponse.paymasterAndData;

      const userOpResponse = await smartAccount.sendUserOp(userOp);
      console.log("userOpHash", userOpResponse);
      const response = await userOpResponse?.wait(1);
      console.log("txHash", response?.receipt.transactionHash);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return { onOpenPublicOffer, onEmitTreasury, isLoading };
}
