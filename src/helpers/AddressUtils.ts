import { isAddress } from "viem";

function isValidAddress(address: string): address is string {
  return isAddress(address);
}

const cleanAddress = (address: string) => {
  address = address.replace(/^['"]+|['"]+$/g, "");
  if (!address.startsWith("0x")) {
    address = "0x" + address;
  }
  if (!isValidAddress(address)) {
    throw new Error("Invalid Ethereum address");
  }
  return "'" + address.slice(2) + "'";
};

function hideAddress(address: string) {
  const firstFour = address.substring(0, 4);
  const lastFour = address.slice(-4);
  return `${firstFour}...${lastFour}`;
}

export const AddressUtils = {
  isValidAddress,
  cleanAddress,
  hideAddress,
};
