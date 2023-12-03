import { Title } from "@/components/Title";
import { TituloCard } from "@/components/TituloCard";

export default function Secundarios() {
  return (
    <div className="m-16">
      <Title children={"Oferta Pública"} className="mb-4" />
      <p className="text-2xl font-medium">
        Descubra as novas ofertas disponíveis e participe de investimentos que
        se alinham com seus objetivos financeiros.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-16">
        <TituloCard />
      </div>
    </div>
  );
}