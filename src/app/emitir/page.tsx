"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { Title } from "@/components/Title";
import { useSourceMinter } from "@/hooks/useSourceMinter";
import { useTesouroDireto } from "@/hooks/useTesouroDireto";
import { getTxLogs } from "@/utils/getTxLogs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Emitir() {
  const { handleSubmit, control } = useForm();
  const [select, setSelect] = useState();
  const [data, setData] = useState();
  const { onEmitTreasury, onOpenPublicOffer, isLoading } = useTesouroDireto();
  const { onEmission, isLoading: loadingSource } = useSourceMinter();
  const { push } = useRouter();

  async function handleSelect({ target }: any) {
    setSelect(target.value);
  }

  async function onSubmit(values: any) {
    const newValues = { ...values, titleType: select };
    setData(newValues);
  }

  async function onEmit() {
    try {
      const hash = await onEmitTreasury(data);
      const logs = await getTxLogs(hash);
      const lastLog = logs?.logs[1].topics[1];
      const tokenId = parseInt(lastLog!, 16);
      const tx = await onOpenPublicOffer(tokenId);
      push(`/emitir/concluido/?h=${tx}`);
    } catch (error) {
      console.error(error);
    }
  }

  async function onEmitDrex() {
    try {
      const tx = await onEmission(data);
      push(`/emitir/drex/?h=${tx}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-white bg-cover bg-no-repeat bg-center items-start justify-center px-40">
      <Title children={"Emissão de Títulos"} className="mb-4" />
      <div className="flex items-start justify-between w-full gap-32">
        <div className="w-1/2">
          <Title children={"Selecione o tipo"} fontSize={24} />
          <select
            onChange={handleSelect}
            placeholder="Selecione"
            className="mt-1 w-full pl-3 pr-10 text-2xl font-bold h-[80px] border-[3px] border-[rgba(17,17,17,.50)] focus:outline-none rounded-md"
          >
            <option>LTN</option>
            <option>NTN-F</option>
            <option>LFT</option>
            <option>NTN-B Principal</option>
            <option>NTN-B</option>
          </select>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-12 w-full"
        >
          <div className="grid grid-cols-2 gap-12">
            <div className="w-full">
              <Title children={"Rentabilidade (APY) anual"} fontSize={24} />
              <Controller
                control={control}
                name="rent"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="0%"
                    className="w-3/5"
                    type="number"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <Title children={"Valor mínimo de cota"} fontSize={24} />
              <Controller
                control={control}
                name="minValue"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="R$0,00"
                    className="w-3/5"
                    type="number"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <Title children={"Duração em anos"} fontSize={24} />
              <Controller
                control={control}
                name="yearsDuration"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="01 ano"
                    className="w-3/5"
                    type="number"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <Title children={"Quantidade de cotas totais"} fontSize={24} />
              <Controller
                control={control}
                name="totalAmount"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="00"
                    className="w-3/5"
                    type="number"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Button
              type="submit"
              loading={isLoading}
              children={"Emitir meu Título"}
              color="green"
              onClick={onEmit}
            />
            <Button
              type="submit"
              loading={loadingSource}
              children={"Emitir meu Título no DREX"}
              color="black"
              onClick={onEmitDrex}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
