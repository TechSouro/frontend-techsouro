"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { useSmartContext } from "@/contexts/SmartContext";
import { AddressUtils } from "@/helpers";
import { useOpenMarket } from "@/hooks/useOpenMarket";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

export default function Transferir({ params }: any) {
  const router = useRouter();
  const { onSafeTransferFrom, isLoading } = useOpenMarket();
  const { address } = useSmartContext();
  const newAddress = AddressUtils.hideAddress(address);

  async function onSell(values: any) {
    const tokenId = params.id;
    try {
      const newValues = { ...values, tokenId };
      const hash = await onSafeTransferFrom(newValues);
      return router.push(
        `/titulos/investimentos/${tokenId}/transferir/concluido?h=${hash}`
      );
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
          <h1 children={"Seu endereço: "} className="text-2xl font-bold" />
          <Controller
            control={control}
            name="addressFrom"
            render={({ field: { onChange, onBlur } }) => (
              <Input
                placeholder="0xC3...D2C8"
                onChange={onChange}
                onBlur={onBlur}
                value={newAddress}
              />
            )}
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4">
          <h1
            children={"Endereço de recebimento:"}
            className="text-2xl font-bold"
          />
          <Controller
            control={control}
            name="addressTo"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Insira o endereço..."
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
