import { GAS_LIMIT, RPC_MUMBAI, sourceMinterAddress, walletPrivateKey } from "@/constants";
import { TesouroDireto__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const payload = await request.json();
  const { minValue, yearsDuration, totalAmount, rent, titleType } = payload;
  const provider = new JsonRpcProvider(RPC_MUMBAI);
  const contract_factory = TesouroDireto__factory.connect(
    sourceMinterAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  const data = {
    _type: 1,
    _apy: Number(rent),
    _avlbTokens: Number(totalAmount),
    _creation: 0,
    _minInvestment: Number(minValue),
    _validThru: Number(yearsDuration),
  };

  try {
    const transaction = await contract.emitTreasury(data, GAS_LIMIT);
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return Response.json(tx);
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}