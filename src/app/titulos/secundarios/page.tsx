"use client";
import { Title } from "@/components/Title";
import { TituloCard } from "@/components/TituloCard";
import { DateFormat } from "@/helpers/DateFormat";
import { StorageHelper } from "@/helpers/StorageHelper";
import { TitlesService } from "@/services";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Secundarios() {
  const { push } = useRouter();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getTitles() {
      const { data } = await TitlesService.getSecondarySales();
      const titles = data.map((e: any) => ({
        id: e.token_id,
        minValue: e.price,
        totalAmount: e.available,
        title: `Titulo #${e.token_id}`,
        titleType:
          "Misto, combina rentabilidade prefixada com variação do IPCA.",
        rent: "6,5% ao ano",
        yearsDuration: `${DateFormat.timestampToYear(e.duration)} anos`,
      }));
      setTitles(titles);
      StorageHelper.setItem("secondarySales", titles);
    }
    getTitles();
  }, []);

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
          {titles?.map((e: any, i) => (
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
