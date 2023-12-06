import {
  GAS_LIMIT,
  RPC_SEPOLIA,
  tesouroDiretoAddress,
  walletPrivateKey,
} from "@/constants";
import { TesouroDireto__factory } from "@/contracts";
import { JsonRpcProvider, ethers } from "ethers";

export async function POST(request: Request) {
  const payload = await request.json();
  const { minValue, yearsDuration, totalAmount, rent } = payload;
  const provider = new JsonRpcProvider(RPC_SEPOLIA);
  const contract_factory = TesouroDireto__factory.connect(
    tesouroDiretoAddress,
    provider
  );
  const wallet = new ethers.Wallet(walletPrivateKey, provider);
  const contract = contract_factory.connect(wallet);

  const daySec = 86400;
  const daysYears = 365.25 * Number(yearsDuration);
  const years = Math.floor(daysYears * daySec);

  const data = {
    _type: 0,
    _apy: Number(rent),
    _avlbTokens: Number(totalAmount),
    _creation: 0,
    _minInvestment: Number(minValue),
    _validThru: years,
  };

  try {
    const transaction = await contract.emitTreasury(data, GAS_LIMIT);
    console.log("transaction: ", transaction);
    const tx = await transaction.wait();
    console.log("tx: ", tx);
    return Response.json(tx);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
