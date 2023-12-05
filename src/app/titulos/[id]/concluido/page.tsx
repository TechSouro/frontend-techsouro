"use client";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Title";
import { useSearchParams } from "next/navigation";

export default function Concluido() {
  const searchParams = useSearchParams();
  const hash = searchParams.get("h");

  return (
    <main className="flex min-h-screen flex-col bg-cadastro_success bg-cover bg-no-repeat bg-center items-center justify-center bg-white">
      <div className="w-[650px] flex flex-col gap-8 items-center justify-center">
        <div className="flex items-center gap-12 w-full">
          <Logo className="w-1/5" />
          <Title children={"O Título foi adquirido com sucesso!"} />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <a href="/dashboard" className="w-full">
            <Button children={"Página inicial"} color="green" />
          </a>
          <a href="/titulos/investimentos" className="w-full">
            <Button children={"Meus Investimentos"} color="white" />
          </a>
          <a href="/titulos" className="w-full">
            <Button children={"Comprar mais Títulos"} color="black" />
          </a>
          <a
            target="_blank"
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            className="w-full"
          >
            <Button children={"Ver transação"} color="black" />
          </a>
        </div>
      </div>
    </main>
  );
}
