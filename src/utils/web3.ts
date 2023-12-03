import { ethers } from "ethers";


export const getEthersProvider = ()  => {
  if (typeof window !== 'undefined' && window.ethereum) {
    // @ts-ignore
    return new ethers.providers.Web3Provider(window?.ethereum);
  }
  return null;
}