import { Button } from "../Button";
import { Title } from "../Title";

export function TituloCard({ titulo }: any) {
  return (
    <div className="bg-[#E3E3E3] rounded-[20px] h-[440px] p-9 flex flex-col justify-between">
      <Title children={titulo.title} fontSize={24} />
      <h1 className="flex">
        <label
          className="font-bold text-lg w-max"
          children={"Tipo de Título: "}
        />
        <label className="font-medium text-lg" children={titulo.titleType} />
      </h1>
      <div className="flex items-center gap-2">
        <h1
          className="font-bold text-lg"
          children={"Rentabilidade (APY) Anual: "}
        />
        <h1 className="font-medium text-lg" children={titulo.rent} />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-lg" children={"Valor Mínimo de Cota: "} />
        <h1 className="font-medium text-lg" children={titulo.minValue} />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-lg" children={"Duração em Anos: "} />
        <h1 className="font-medium text-lg" children={titulo.yearsDuration} />
      </div>
      <div className="flex items-center gap-2">
        <h1
          className="font-bold text-lg"
          children={"Quantidade de Cotas Totais: "}
        />
        <h1 className="font-medium text-lg" children={titulo.totalAmount} />
      </div>
      <a href={`/titulos/${titulo.id}`} className="w-full">
        <Button children={"Comprar Título"} color="white" />
      </a>
    </div>
  );
}
