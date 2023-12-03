import { sourceMinterAddress } from "@/constants";
import { useSmartContext } from "@/contexts/SmartContext";
import { SourceMinter__factory } from "@/contracts";
import {
  IHybridPaymaster,
  PaymasterMode,
  SponsorUserOperationDto,
} from "@biconomy/paymaster";
import { useState } from "react";
import toast from "react-hot-toast";

export function useSourceMinter() {
  const [isLoading, setIsLoading] = useState(false);
  const { smartAccount, signer } = useSmartContext();
  const contract = SourceMinter__factory.connect(sourceMinterAddress, signer!);

  async function onEmission() {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.emission(
        "16015286601757825753",
        "0x929168FE46576F5d51c552fe145ec918D8D25d04",
        1,
        {
          _type: 1,
          _apy: 1,
          _avlbTokens: 1,
          _creation: 1,
          _minInvestment: 1,
          _validThru: 1,
        }
      );
      console.log(minTx);
      const tx1 = {
        to: sourceMinterAddress,
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

  return { onEmission, isLoading };
}
