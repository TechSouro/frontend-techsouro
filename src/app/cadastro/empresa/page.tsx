"use client";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Empresa() {
  return (
    <main className="flex min-h-screen flex-col bg-cadastro bg-cover bg-no-repeat bg-center items-end justify-center pr-[160px] bg-white">
      <div className="w-[850px] flex flex-col gap-8 items-center justify-center">
        <Title
          children={"Qual tipo de conta você deseja criar?"}
          className="mb-8"
        />
        <Button children={"Para mim"} color="white" />
        <Button children={"Para minha empresa"} color="white" />
      </div>
    </main>
  );
}
