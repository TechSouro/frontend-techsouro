import { Title } from "@/components/Title";
import { TituloCard } from "@/components/TituloCard";

export default function Secundarios() {
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
        <Title children={"Oferta Pública"} className="mb-4" />
        <p className="text-2xl font-medium">
          Descubra as novas ofertas disponíveis e participe de investimentos que
          se alinham com seus objetivos financeiros.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-16">
          <TituloCard />
        </div>
      </div>
    </main>
  );
}
