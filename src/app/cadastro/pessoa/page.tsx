"use client";
import { Input } from "@/components/Form/Input";
import { Arrow } from "@/components/Icons/Arrow";
import { Title } from "@/components/Title";

export default function Pessoa() {
  return (
    <main className="flex min-h-screen flex-col bg-cadastro_pessoa bg-cover bg-no-repeat bg-center items-end justify-center pr-[160px] bg-white">
      <div className="w-[850px] flex flex-col gap-4 items-start justify-center">
        <Title children={"Preencha seus dados"} />
        <div>
          <Title children={"Nome e identificação"} fontSize={24} />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nome" />
            <Input placeholder="Sobrenome" />
            <Input placeholder="CPF" />
          </div>
        </div>
        <div className="w-full">
          <Title
            children={"Data de nasc. e endereço de e-mail"}
            fontSize={24}
          />
          <div className="flex items-center gap-4 w-full">
            <Input placeholder="DD/MM/AAAA" className="w-3/5" type="date" />
            <Input placeholder="E-mail" className="w-full" type="email" />
          </div>
        </div>
        <div className="w-full space-y-4">
          <Title children={"Endereço"} fontSize={24} />
          <div className="flex items-center gap-4 w-full">
            <Input placeholder="Logradouro" className="w-full" />
            <Input placeholder="Nº" className="w-[15%]" type="number" />
          </div>
          <div className="flex items-center gap-4 w-full">
            <Input placeholder="Complemento" className="w-full" />
            <Input placeholder="Bairro" className="w-full" />
            <Input placeholder="CEP" className="w-3/4" type="number" />
          </div>
        </div>
        <a
          href="/cadastro/concluido"
          className="self-end flex items-center gap-2"
        >
          <Title children={"PROSSEGUIR"} fontColor="#0000007e" fontSize={32} />
          <Arrow />
        </a>
      </div>
    </main>
  );
}
