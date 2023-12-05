"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { useSmartContext } from "@/contexts/SmartContext";
import { AddressUtils } from "@/helpers";
import { useOpenMarket } from "@/hooks/useOpenMarket";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

export default function Resgatar({ params }: any) {
  const router = useRouter();
  const { onRetrieveInvestment, isLoading } = useOpenMarket();
  const { address } = useSmartContext();
  const newAddress = AddressUtils.hideAddress(address);

  async function onResg(values: any) {
    const tokenId = params.id;
    const { amount, unitValue } = values;
    const payload = { tokenId, amount, unitValue };
    try {
      const hash = await onRetrieveInvestment(payload);
      return router.push(
        `/titulos/investimentos/${tokenId}/resgatar/concluido?h=${hash}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  const { handleSubmit, control } = useForm();

  return (
    <div className="flex flex-col min-h-screen bg-[url('/bgs/titulo_bg.png')] bg-cover bg-no-repeat bg-center items-center justify-center">
      <form
        onSubmit={handleSubmit(onResg)}
        className="w-[540px] flex flex-col gap-12"
      >
        <div className="flex flex-col items-start gap-8">
          <h1 children={"Seu Título: "} className="text-2xl font-bold" />
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="NTN-B Principal... "
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <h1 children={"Você receberá:"} className="text-2xl font-bold" />
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="18,405 DREX"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <h1 children={"Seu endereço:"} className="text-2xl font-bold" />
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, onBlur } }) => (
              <Input
                placeholder="0xC364...D2C8"
                onChange={onChange}
                onBlur={onBlur}
                value={newAddress}
              />
            )}
          />
        </div>
        <Button
          loading={isLoading}
          type="submit"
          children={"Transferir Título"}
          color="green"
        />
      </form>
    </div>
  );
}
