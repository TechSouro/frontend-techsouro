"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { useOpenMarket } from "@/hooks/useOpenMarket";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

export default function Vender({ params }: any) {
  const router = useRouter();
  const { onSellMyUnits } = useOpenMarket();

  async function onSell(values: any) {
    const id = params.id;
    console.log(id);
    try {
      await onSellMyUnits(id, values.amount, values.unitValue);
      return router.push(`/titulos/investimentos/${id}/vender/concluido`);
    } catch (error) {
      console.error(error);
    }
  }

  const { handleSubmit, control } = useForm();

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bgs/titulo_bg.png')] bg-cover bg-no-repeat bg-center items-center justify-center">
      <form
        onSubmit={handleSubmit(onSell)}
        className="w-[540px] flex flex-col gap-12"
      >
        <div className="flex flex-col items-start gap-8">
          <h1 children={"Tipo de Título:"} className="text-2xl font-bold" />
          <Controller
            control={control}
            name="titleType"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="NTN-B Principal"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <h1
            children={"Insira a quantidade de cotas desejada"}
            className="text-2xl font-bold"
          />
          <Controller
            control={control}
            name="unitValue"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="15,320 DREX"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <h1
            children={"Insira a quantidade de cotas desejada"}
            className="text-2xl font-bold"
          />
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="00"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <Button type="submit" children={"Vender Título"} color="green" />
      </form>
    </div>
  );
}
