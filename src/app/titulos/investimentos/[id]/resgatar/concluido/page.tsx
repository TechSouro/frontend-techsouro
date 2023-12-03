import { Button } from "@/components/Button";
import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Title";

export default function Concluido() {
  return (
    <main className="flex min-h-screen flex-col bg-cadastro_success bg-cover bg-no-repeat bg-center items-center justify-center bg-white">
      <div className="w-[650px] flex flex-col gap-8 items-center justify-center">
        <div className="flex items-center gap-12 w-full">
          <Logo className="w-1/5" />
          <Title children={"Título resgatado com sucesso!"} />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <a href="/" className="w-full">
            <Button children={"Página inicial"} color="green" />
          </a>
          <a href="/titulos/investimentos" className="w-full">
            <Button children={"Meus Investimentos"} color="white" />
          </a>
        </div>
      </div>
    </main>
  );
}
