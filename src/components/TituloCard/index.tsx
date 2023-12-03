import { Button } from "../Button";
import { Title } from "../Title";

export function TituloCard({ titulo }: any) {
  const item = {
    id: 1,
    title: "titulo",
    titleType: "Misto, combina rentabilidade prefixada com variação do IPCA.",
    rent: "6,5% ao ano",
    minValue: "R$ 100,00",
    yearsDuration: "5 anos",
    totalAmount: "100 cotas",
  };

  return (
    <div className="bg-[#E3E3E3] rounded-[20px] h-[440px] p-9 flex flex-col justify-between">
      <Title children={item.title} fontSize={24} />
      <h1 className="flex">
        <label
          className="font-bold text-lg w-max"
          children={"Tipo de Título: "}
        />
        <label className="font-medium text-lg" children={item.titleType} />
      </h1>
      <div className="flex items-center gap-2">
        <h1
          className="font-bold text-lg"
          children={"Rentabilidade (APY) Anual: "}
        />
        <h1 className="font-medium text-lg" children={item.rent} />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-lg" children={"Valor Mínimo de Cota: "} />
        <h1 className="font-medium text-lg" children={item.minValue} />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-lg" children={"Duração em Anos: "} />
        <h1 className="font-medium text-lg" children={item.yearsDuration} />
      </div>
      <div className="flex items-center gap-2">
        <h1
          className="font-bold text-lg"
          children={"Quantidade de Cotas Totais: "}
        />
        <h1 className="font-medium text-lg" children={item.totalAmount} />
      </div>
      <Button children={"Comprar Título"} color="white" />
    </div>
  );
}
