import { useRouter } from "next/router";
import { Button } from "../Button";
import { Title } from "../Title";

export function InvestCard({ titulo, onSell, onTransfer, onResg }: any) {
  return (
    <div className="bg-[#E3E3E3] rounded-[20px] p-9 flex gap-20 justify-between">
      <div className="flex flex-col justify-between">
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
          <h1
            className="font-bold text-lg"
            children={"Valor Mínimo de Cota: "}
          />
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
      </div>
      <div className="h-full flex flex-col justify-between w-1/2 gap-8">
        <Button children={"Vender"} onClick={onSell} color="white" />
        <Button children={"Transferir"} onClick={onTransfer} color="green" />
        <Button children={"Resgatar"} onClick={onResg} color="black" />
      </div>
    </div>
  );
}
