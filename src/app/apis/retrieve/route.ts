import {
  GAS_LIMIT,
  RPC_SEPOLIA,
  openMarketAddress,
  walletPrivateKey,
} from "@/constants";
import { OpenMarket__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const { amount, tokenId } = await request.json();
  console.log(tokenId, amount);
  const provider = new JsonRpcProvider(RPC_SEPOLIA);
  const contract_factory = OpenMarket__factory.connect(
    openMarketAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  try {
    const transaction = await contract.retrieveInvestment(
      Number(tokenId),
      Number(amount),
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
