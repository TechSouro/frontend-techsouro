import { Contract, BigNumber, ethers } from "ethers";

const GASLIMIT_DEFAULT = "500000";

export async function calculateGasLimit(
  contract: Contract,
  functionName: string,
  params: any[]
): Promise<BigNumber> {
  try {
    const estimateGas = await contract.estimateGas[functionName](...params);
    return estimateGas;
  } catch (error) {
    return ethers.BigNumber.from(GASLIMIT_DEFAULT);
  }
}
