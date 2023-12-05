"use client";
import { Title } from "@/components/Title";
import { TituloCard } from "@/components/TituloCard";
import { useRouter } from "next/navigation";

export default function Secundarios() {
  const { push } = useRouter();
  const titulos = [
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
        <Title children={"Mercado Secundário"} className="mb-4" />
        <p className="text-2xl font-medium">
          O Mercado Secundário oferece flexibilidade e liquidez, permitindo que
          você gerencie seus investimentos de maneira ágil e inteligente.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-16">
          {titulos.map((e, i) => (
            <TituloCard
              titulo={e}
              key={i}
              onClick={() => push(`/titulos/secundarios/${e.id}`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
