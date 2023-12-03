import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmartContextProvider } from "@/contexts/SmartContext";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techsouro",
  description: "Created by the best developer: Murillo XR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
