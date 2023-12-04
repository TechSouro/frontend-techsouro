import { Contract } from "ethers";

const GASLIMIT_DEFAULT = "500000";

export async function calculateGasLimit(
  contract: Contract,
  functionName: string,
  params: any[]
): Promise<bigint> {
  try {
    const estimateGas = await contract?.[functionName].estimateGas(...params);
    return estimateGas;
  } catch (error) {
    return BigInt(GASLIMIT_DEFAULT);
  }
}
