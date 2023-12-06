"use client";
import { Title } from "@/components/Title";
import { useSmartContext } from "@/contexts/SmartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useSmartContext();
  const { push } = useRouter();
  const four = [
    { title: "Emissão de Títulos", icon: "", link: "/emitir" },
    { title: "Oferta Pública", icon: "", link: "/titulos" },
    { title: "Mercado Secundário", icon: "", link: "/titulos/secundarios" },
    { title: "Meus Investimentos", icon: "", link: "/titulos/investimentos" },
  ];

  useEffect(() => {
    if (!user) push("/");
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white bg-cover bg-no-repeat bg-center items-start justify-center px-40">
      <div className="w-full flex flex-col gap-8 items-start justify-center">
        <Title
          children={`Bom ter você de volta, ${user?.name}!`}
          className="w-3/5"
        />
        <div className="bg-[rgba(17,17,17,.30)] rounded-2xl w-full p-6">
          <div className="grid grid-cols-4 gap-6">
            {four.map((e, i) => (
              <Link
                href={e.link}
                key={i}
                className="h-[360px] bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-2xl text-4xl leading-[46px] font-bold p-9 flex items-end"
              >
                {e.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 w-full mt-6">
            <Link
              href={"/rastreabilidade"}
              className="h-[230px] bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-2xl text-4xl font-bold p-9 flex items-end w-full"
            >
              <p className="w-1/2 leading-[46px]">
                Dashboard de Rastreabilidade
              </p>
            </Link>
            <div className="h-[230px] bg-[url('/images/negao.png')] bg-cover rounded-2xl text-4xl font-bold p-9 flex items-end w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
