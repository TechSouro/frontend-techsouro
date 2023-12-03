"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { Title } from "@/components/Title";
import { useOpenMarket } from "@/hooks/useOpenMarket";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Compra({ params }: any) {
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const { onPurchasePrimary } = useOpenMarket();

  async function onBuy() {
    const id = params.id;
    console.log(amount);
    console.log(id);
    try {
      await onPurchasePrimary(id, Number(amount));
      return router.push(`/titulos/${id}/concluido`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bgs/titulo_bg.png')] bg-cover bg-no-repeat bg-center items-center justify-center">
      <div className="w-[540px] flex flex-col items-center gap-8">
        <Title
          children={"Insira a quantidade de cotas desejada"}
          fontSize={24}
        />
        <Input
          placeholder="00"
          onChange={({ target }) => setAmount(target.value)}
          value={amount}
        />
        <Button onClick={onBuy} children={"Confirmar compra"} color="green" />
      </div>
    </div>
  );
}
