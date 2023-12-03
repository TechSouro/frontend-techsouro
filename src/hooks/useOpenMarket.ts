import { openMarketAddress } from "@/constants";
import { useSmartContext } from "@/contexts/SmartContext";
import { OpenMarket__factory } from "@/contracts";
import {
  IHybridPaymaster,
  PaymasterMode,
  SponsorUserOperationDto,
} from "@biconomy/paymaster";
import { useState } from "react";
import toast from "react-hot-toast";

export function useOpenMarket() {
  const [isLoading, setIsLoading] = useState(false);
  const { smartAccount, signer } = useSmartContext();
  const contract = OpenMarket__factory.connect(openMarketAddress, signer!);

  async function onPurchasePrimary(tokenId: number, amount: number) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.purchasePrimary(
        tokenId,
        amount
      );
      console.log(minTx);
      const tx1 = {
        to: openMarketAddress,
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

  async function onBuySecondary(
    seller: string,
    tokenId: number,
    amount: number
  ) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.buySecondary(
        seller,
        tokenId,
        amount
      );
      console.log(minTx);
      const tx1 = {
        to: openMarketAddress,
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

  async function onSellMyUnits(tokenId: number, amount: number, price: number) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.sellMyUnits(
        tokenId,
        amount,
        price
      );
      console.log(minTx);
      const tx1 = {
        to: openMarketAddress,
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

  async function onSafeTransferFrom(payload: any) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.safeTransferFrom(
        "tokenId",
        "amount",
        2,
        2,
        ""
      );
      console.log(minTx);
      const tx1 = {
        to: openMarketAddress,
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

  async function onRetrieveInvestment(tokenId: number, amount: number) {
    setIsLoading(true);
    try {
      if (!smartAccount) return;
      const minTx = await contract.populateTransaction.retrieveInvestment(
        tokenId,
        amount
      );
      console.log(minTx);
      const tx1 = {
        to: openMarketAddress,
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

  return {
    onPurchasePrimary,
    onBuySecondary,
    onSellMyUnits,
    onSafeTransferFrom,
    onRetrieveInvestment,
    isLoading,
  };
}
