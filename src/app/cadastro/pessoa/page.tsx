"use client";
import { Input } from "@/components/Form/Input";
import { Arrow } from "@/components/Icons/Arrow";
import { Title } from "@/components/Title";
import { useSmartContext } from "@/contexts/SmartContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Pessoa() {
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
    <main className="flex min-h-screen flex-col bg-cadastro_pessoa bg-cover bg-no-repeat bg-center items-end justify-center pr-[160px] bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[850px] flex flex-col gap-4 items-start justify-center"
      >
        <Title children={"Preencha seus dados"} />
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
              name="sobrenome"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Sobrenome"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="CPF"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <Title
            children={"Data de nasc. e endereço de e-mail"}
            fontSize={24}
          />
          <div className="flex items-center gap-4 w-full">
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="DD/MM/AAAA"
                  className="w-3/5"
                  type="date"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="E-mail"
                  className="w-full"
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <Title children={"Endereço"} fontSize={24} />
          <div className="flex items-center gap-4 w-full">
            <Controller
              control={control}
              name="logradouro"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Logradouro"
                  className="w-full"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="numberHouse"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nº"
                  className="w-[15%]"
                  type="number"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
          <div className="flex items-center gap-4 w-full">
            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Complemento"
                  className="w-full"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="zone"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Bairro"
                  className="w-full"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="CEP"
                  className="w-3/4"
                  type="number"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <button type="submit" className="self-end flex items-center gap-2">
          <Title children={"PROSSEGUIR"} fontColor="#0000007e" fontSize={32} />
          <Arrow />
        </button>
      </form>
    </main>
  );
}
