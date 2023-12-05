import { RPC_SEPOLIA } from "@/constants";
import { JsonRpcProvider } from "ethers";

export async function getTxLogs(txHash: string) {
  const provider = new JsonRpcProvider(RPC_SEPOLIA);
  const receipt = await provider.getTransactionReceipt(txHash);
  return receipt;
}
