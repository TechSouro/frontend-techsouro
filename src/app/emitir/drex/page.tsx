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
          <Title children={"Seu Título foi emitido com sucesso!"} />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <a href="/dashboard" className="w-full">
            <Button children={"Página inicial"} color="green" />
          </a>
          <a href="/emitir" className="w-full">
            <Button children={"Emitir mais Títulos"} color="black" />
          </a>
          <a
            target="_blank"
            href={`https://ccip.chain.link/msg/${hash}`}
            className="w-full"
          >
            <Button children={"Acompanhe a transação"} color="black" />
          </a>
        </div>
      </div>
    </main>
  );
}
