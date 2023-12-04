"use client";
import { Input } from "@/components/Form/Input";
import { Arrow } from "@/components/Icons/Arrow";
import { Title } from "@/components/Title";
import { useSmartContext } from "@/contexts/SmartContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Empresa() {
  const { control, handleSubmit } = useForm();
  const { push } = useRouter();
  const { login } = useSmartContext();

  async function onSubmit(values: any) {
    console.log(values);
    try {
      toast.loading("Cadastrando...", { duration: 2000 });
      await login();
      return push("/cadastro/concluido");
    } catch (error) {
      toast.error("Erro ao cadastrar!");
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-cadastro_empresa bg-cover bg-no-repeat bg-center items-end justify-center pr-[160px] bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[850px] flex flex-col gap-4 items-start justify-center"
      >
        <Title children={"Preencha os dados da empresa"} />
        <div>
          <Title children={"Nome e identificação"} fontSize={24} />
          <div className="grid grid-cols-2 gap-4">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nome"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="cnpj"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="CNPJ"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <Title children={"Endereço comercial"} fontSize={24} />
          <div className="flex items-center gap-4 w-full">
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="CEP"
                  className="w-1/3"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="logradouro"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Logradouro"
                  className="w-1/2"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="number"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nº"
                  className="w-1/3"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
          <div className="flex items-center gap-4 w-full mt-6">
            <Controller
              control={control}
              name="bairro"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Bairro"
                  className="w-1/2"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="municipio"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Município"
                  className="w-1/2"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="uf"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="UF"
                  className="w-1/3"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <Title children={"Documentos da empresa"} fontSize={24} />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Envie o Cartão CNPJ ou Contrato Social da empresa"
                className="w-full"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <button type="submit" className="self-end flex items-center gap-2 mt-8">
          <Title children={"PROSSEGUIR"} fontColor="#0000007e" fontSize={32} />
          <Arrow />
        </button>
      </form>
    </main>
  );
}
