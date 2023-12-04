import { GAS_LIMIT, RPC_MUMBAI, sourceMinterAddress, walletPrivateKey } from "@/constants";
import { SourceMinter__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const payload = await request.json();
  const { minValue, yearsDuration, totalAmount, rent } = payload;
  const provider = new JsonRpcProvider(RPC_MUMBAI);
  const contract_factory = SourceMinter__factory.connect(
    sourceMinterAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  try {
    const transaction = await contract.emission(
      "16015286601757825753",
      "0x929168FE46576F5d51c552fe145ec918D8D25d04",
      1,
      {
        _type: 1,
        _apy: Number(rent),
        _avlbTokens: Number(totalAmount),
        _creation: 1,
        _minInvestment: Number(minValue),
        _validThru: Number(yearsDuration),
      },
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
