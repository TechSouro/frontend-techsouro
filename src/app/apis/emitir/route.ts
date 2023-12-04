import {
  providerEther,
  sourceMinterAddress,
  walletPrivateKey,
} from "@/constants";
import { SourceMinter__factory } from "@/contracts";
import { ethers } from "ethers";

export async function POST(request: Request) {
  const wallet = new ethers.Wallet(walletPrivateKey, providerEther);
  const signer = wallet.connect(providerEther);
  const contract = SourceMinter__factory.connect(sourceMinterAddress, signer);
  console.log(contract);

  try {
    const transaction = await contract.emission(
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
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return tx;
  } catch (error: any) {
    throw new Error(error);
  }
}
