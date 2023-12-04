import {
  GAS_LIMIT,
  RPC_MUMBAI,
  sourceMinterAddress,
  tesouroDiretoAddress,
  walletPrivateKey,
} from "@/constants";
import { TesouroDireto__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const { tokenId } = await request.json();
  console.log(tokenId);
  const provider = new JsonRpcProvider(RPC_MUMBAI);
  const contract_factory = TesouroDireto__factory.connect(
    tesouroDiretoAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  try {
    const transaction = await contract.openPublicOffer(tokenId, GAS_LIMIT);
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return Response.json(tx);
  } catch (error: any) {
    throw new Error(error);
  }
}
