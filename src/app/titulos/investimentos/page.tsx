"use client";
import { InvestCard } from "@/components/InvestCard";
import { Title } from "@/components/Title";
import { useRouter } from "next/navigation";

export default function Investimentos() {
  const { push } = useRouter();
  const invests = [
    {
      id: 1,
      title: "titulo",
      titleType: "Misto, combina rentabilidade prefixada com variação do IPCA.",
      rent: "6,5% ao ano",
      minValue: "R$ 100,00",
      yearsDuration: "5 anos",
      totalAmount: "100 cotas",
    },
  ];
  return (
    <main className="flex min-h-screen bg-white bg-cover bg-no-repeat bg-center px-40">
      <div className="bg-[#6CF13F] min-h-screen w-[330px] flex flex-col items-start justify-center px-12">
        <Title children={"Títulos Disponíveis"} fontSize={24} />
        <ul className="text-lg font-bold mb-40 mt-12 flex flex-col gap-4">
          <li>LTN</li>
          <li>NTN-F</li>
          <li>LFT</li>
          <li>NTN-B Principal</li>
          <li>NTN-B</li>
        </ul>
      </div>
      <div className="m-16">
        <Title children={"Meus investimentos"} className="mb-4" />
        <p className="text-2xl font-medium">
          Aqui, você tem controle total sobre seus títulos, com opções simples e
          rápidas. Venda, transfira ou resgate seus ativos conforme sua
          estratégia financeira.
        </p>
        <div className="flex flex-col gap-6 mt-16">
          {invests.map((e, i) => (
            <InvestCard
              titulo={e}
              key={i}
              onSell={() => push(`/titulos/investimentos/${e.id}/vender`)}
              onTransfer={() =>
                push(`/titulos/investimentos/${e.id}/transferir`)
              }
              onResg={() => push(`/titulos/investimentos/${e.id}/resgatar`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
