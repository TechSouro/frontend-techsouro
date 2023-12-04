import {
  GAS_LIMIT,
  RPC_MUMBAI,
  openMarketAddress,
  sourceMinterAddress,
  walletPrivateKey,
} from "@/constants";
import { OpenMarket__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const { tokenId, amount } = await request.json();
  const provider = new JsonRpcProvider(RPC_MUMBAI);
  const contract_factory = OpenMarket__factory.connect(
    openMarketAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  try {
    const transaction = await contract.buySecondary(
      wallet.address,
      tokenId,
      amount,
      GAS_LIMIT
    );
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return Response.json(tx);
  } catch (error: any) {
    throw new Error(error);
  }
}
