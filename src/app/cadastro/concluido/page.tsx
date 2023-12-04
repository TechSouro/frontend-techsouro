"use client";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Title";

export default function Concluido() {
  return (
    <main className="flex min-h-screen flex-col bg-cadastro_success bg-cover bg-no-repeat bg-center items-center justify-center bg-white">
      <div className="w-[650px] flex flex-col gap-8 items-center justify-center">
        <div className="flex items-center gap-12 w-full">
          <Logo className="w-1/5" />
          <Title children={"Conta Techsouro criada com sucesso!"} />
        </div>
        <p className="font-medium text-2xl">
          Agora você faz parte de uma comunidade dedicada à inovação financeira.
          Descubra as oportunidades de investimento que preparamos para você.
        </p>
        <a href="/dashboard" className="w-full">
          <Button children={"Acesse a plataforma"} color="green" />
        </a>
      </div>
    </main>
  );
}
