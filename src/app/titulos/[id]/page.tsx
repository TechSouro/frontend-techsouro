import { Title } from "@/components/Title";

export default function TituloId({ params }: any) {
  return (
    <div className="flex min-h-screen bg-[url('/bgs/titulo_bg.png')] bg-cover bg-no-repeat bg-center gap-32 p-40 relative">
      <div className="flex-col flex gap-8">
        <Title children={"Detalhes do Título"} className="mb-4" />
        <p className="text-2xl font-medium">
          <span className="font-bold">Características: </span> Oferece uma taxa
          prefixada de 6% ao ano mais a variação do IPCA, proporcionando um
          retorno fixo com proteção contra a inflação.
        </p>
        <p className="text-2xl font-medium">
          <span className="font-bold">Valor Mínimo de Investimento: </span> Cada
          cota do título custa R$ 200,00, então para adquirir 50 cotas, o
          investimento mínimo seria de R$ 10.000,00.
        </p>
        <p className="text-2xl font-medium">
          <span className="font-bold">Rentabilidade: </span> O investidor
          receberá 6% ao ano mais a variação do IPCA acumulada durante o período
          de 10 anos.
        </p>
      </div>
      <div className="flex-col flex gap-8">
        <Title children={"Informações Adicionais"} className="mb-4" />
        <p className="text-2xl font-medium">
          <span className="font-bold">Vencimento: </span> 10 anos (longo prazo)
        </p>
        <p className="text-2xl font-medium">
          <span className="font-bold">Mecanismo de Correção: </span>
          Rentabilidade prefixada somada à variação do IPCA, proporcionando uma
          remuneração fixa com correção pela inflação.
        </p>
        <p className="text-2xl font-medium">
          <span className="font-bold">Risco e Segurança: </span> Baixo risco
        </p>
        <p className="text-2xl font-medium">
          <span className="font-bold">Resgate antecipado: </span> Sim
        </p>
      </div>
      <a
        href={`/titulos/${params.id}/compra`}
        className="text-3xl font-bold text-[rgba(17,17,17,.50)] absolute bottom-40 right-40 cursor-pointer"
      >
        PROSSEGUIR
      </a>
    </div>
  );
}
