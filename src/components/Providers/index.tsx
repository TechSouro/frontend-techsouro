import { SmartContextProvider } from "@/contexts/SmartContext";
import { PropsWithChildren } from "react";
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SmartContextProvider>
      <Toaster />
      {children}
    </SmartContextProvider>
  );
}
