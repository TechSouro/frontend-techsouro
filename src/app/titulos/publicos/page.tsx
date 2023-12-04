import { Title } from "@/components/Title";
import { TituloCard } from "@/components/TituloCard";

export default function Publicos() {
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
    <div className="m-16">
      <Title children={"Oferta Pública"} className="mb-4" />
      <p className="text-2xl font-medium">
        Descubra as novas ofertas disponíveis e participe de investimentos que
        se alinham com seus objetivos financeiros.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-16">
        {titulos.map((e, i) => (
          <TituloCard titulo={e} key={i} />
        ))}
      </div>
    </div>
  );
}
