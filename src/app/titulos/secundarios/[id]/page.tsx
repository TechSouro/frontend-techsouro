"use client";
import Tabela from "@/components/Tabela";
import { Title } from "@/components/Title";
import { StorageHelper } from "@/helpers/StorageHelper";
import { useEffect, useState } from "react";

export default function TituloId({ params }: any) {
  const [title, setTitle] = useState<any>();

  useEffect(() => {
    async function getTitle() {
      const titles = await StorageHelper.getItem("secondarySales");
      const title = titles.find((e: any) => e.id === Number(params.id));
      setTitle(title);
      console.log(title);
    }
    getTitle();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bgs/titulo_bg.png')] bg-cover bg-no-repeat bg-center p-40 relative">
      <div className="flex gap-32 mb-10">
        <div className="flex-col flex gap-8">
          <Title children={"Detalhes Comerciais"} className="mb-4" />
          <p className="text-2xl font-medium">
            <span className="font-bold">Características: </span> Oferece uma
            taxa prefixada de 6% ao ano mais a variação do IPCA, proporcionando
            um retorno fixo com proteção contra a inflação.
          </p>
          <p className="text-2xl font-medium">
            <span className="font-bold">Valor Mínimo de Investimento: </span>{" "}
            Cada cota do título custa R$ 200,00, então para adquirir 50 cotas, o
            investimento mínimo seria de R$ 10.000,00.
          </p>
          <p className="text-2xl font-medium">
            <span className="font-bold">Rentabilidade: </span> O investidor
            receberá 6% ao ano mais a variação do IPCA acumulada durante o
            período de 10 anos.
          </p>
        </div>
        <div className="flex-col flex gap-8">
          <Title children={"Informações Adicionais"} className="mb-4" />
          <p className="text-2xl font-medium">
            <span className="font-bold">Características: </span> Oferece uma
            taxa prefixada de 6% ao ano mais a variação do IPCA, proporcionando
            um retorno fixo com proteção contra a inflação.
          </p>
          <p className="text-2xl font-medium">
            <span className="font-bold">Valor Mínimo de Investimento: </span>{" "}
            Cada cota do título custa R$ 200,00, então para adquirir 50 cotas, o
            investimento mínimo seria de R$ 10.000,00.
          </p>
          <p className="text-2xl font-medium">
            <span className="font-bold">Rentabilidade: </span> O investidor
            receberá 6% ao ano mais a variação do IPCA acumulada durante o
            período de 10 anos.
          </p>
        </div>
      </div>
      <Tabela title={title} />
      <a
        href={`/titulos/secundarios/${title.id}/compra`}
        className="text-3xl font-bold text-[rgba(17,17,17,.50)] absolute bottom-20 right-40 cursor-pointer"
      >
        PROSSEGUIR
      </a>
    </div>
  );
}
