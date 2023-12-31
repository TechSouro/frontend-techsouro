import { GAS_LIMIT, RPC_SEPOLIA, sourceMinterAddress, walletPrivateKey } from "@/constants";
import { OpenMarket__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const payload = await request.json();
  const provider = new JsonRpcProvider(RPC_SEPOLIA);
  const contract_factory = OpenMarket__factory.connect(
    sourceMinterAddress,
    provider
  );
  console.log(payload)
  const wallet = new ethers.Wallet(walletPrivateKey!, provider);
  const contract = contract_factory.connect(wallet);
  console.log(contract)

  try {
    const transaction = await contract.KYC(payload.address, GAS_LIMIT);
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return Response.json(tx);
  } catch (error: any) {
    throw new Error(error);
  }
}
