"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { StorageHelper } from "@/helpers/StorageHelper";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { ethers } from "ethers";
import { ChainId } from "@biconomy/core-types";
import { ParticleAuthModule, ParticleProvider } from "@biconomy/particle-auth";
import {
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
  ECDSAOwnershipValidationModule,
} from "@biconomy/modules";

type SmartContextType = {
  login: () => Promise<void>;
  signer: ethers.Signer | null;
  smartAccount: BiconomySmartAccountV2 | null;
  address: string;
};

export const SmartContext = createContext<SmartContextType>(undefined!);

export const useSmartContext = () => {
  const context = useContext(SmartContext);
  if (!context) {
    throw new Error(
      "useSmartContext must be used within a SmartContextProvider"
    );
  }
  return context;
};

export const SmartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [particle, setParticle] =
    useState<ParticleAuthModule.ParticleNetwork | null>(null);
  const [bundler, setBundler] = useState<IBundler | null>(null);
  const [paymaster, setPaymaster] = useState<IPaymaster | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const address = StorageHelper.getItem("address");
  const smartAccount = StorageHelper.getItem("smartAccount");

  useEffect(() => {
    async function setupSmartAccount() {
      const particle = new ParticleAuthModule.ParticleNetwork({
        projectId: "687c92c7-b132-41a9-92ce-dd7e9bc43514",
        clientKey: "cj6ogNRkgLqlgR65cHWVzb1Cry8iIw1TEh3C5YvY",
        appId: "efeef595-2798-4b6c-8176-498feaac10f5",
        wallet: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
        },
      });
      const bundler: IBundler = new Bundler({
        bundlerUrl:
          "https://paymaster.biconomy.io/api/v1/80001/xMSf-5z4m.8d26f8e3-3e19-4123-8d47-f42c6bd617d1",
        chainId: ChainId.POLYGON_MUMBAI,
        entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
      });
      const paymaster: IPaymaster = new BiconomyPaymaster({
        paymasterUrl:
          "https://paymaster.biconomy.io/api/v1/80001/xMSf-5z4m.8d26f8e3-3e19-4123-8d47-f42c6bd617d1",
      });
      setPaymaster(paymaster);
      setBundler(bundler);
      setParticle(particle);
    }

    setupSmartAccount();
  }, [address]);

  const login = async () => {
    try {
      if (!particle) return;
      const userInfo = await particle.auth.login();
      console.log("Logged in user:", userInfo);
      const particleProvider = new ParticleProvider(particle.auth);
      const web3Provider = new ethers.providers.Web3Provider(
        particleProvider,
        "any"
      );

      const module = await ECDSAOwnershipValidationModule.create({
        signer: web3Provider.getSigner(),
        moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
      });
      setSigner(web3Provider.getSigner());

      let biconomySmartAccount = await BiconomySmartAccountV2.create({
        chainId: ChainId.POLYGON_MUMBAI,
        bundler: bundler!,
        paymaster: paymaster!,
        entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
        defaultValidationModule: module,
        activeValidationModule: module,
      });
      const address = await biconomySmartAccount.getAccountAddress();
      StorageHelper.setItem("smartAccount", biconomySmartAccount);
      StorageHelper.setItem("address", address);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    login,
    signer,
    smartAccount,
    address,
  };

  return (
    <SmartContext.Provider value={value}>{children}</SmartContext.Provider>
  );
};
