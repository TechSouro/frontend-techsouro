"use client";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Form/Checkbox";
import { Input } from "@/components/Form/Input";
import { LogoIcon } from "@/components/Icons/LogoIcon";
import { Title } from "@/components/Title";
import { useSmartContext } from "@/contexts/SmartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const { login } = useSmartContext();
  const router = useRouter();
  const { user } = useSmartContext();

  async function onLogin() {
    await login();
    return router.push("/dashboard");
  }

  async function onAccess() {
    if (user) return router.push("/dashboard");
    toast.error("Precisa criar uma conta ou fazer login para acessar!");
  }

  return (
    <main className="flex min-h-screen flex-col bg-login bg-cover bg-no-repeat bg-center items-center justify-center bg-white">
      <div className="w-[566px] flex flex-col gap-8 items-center justify-center">
        <LogoIcon />
        <Title children={"Entre na sua conta"} />
        <Button children={"Entre com ID"} color="black" onClick={onLogin} />
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="bg-[#0000007e] h-[3px] w-full rounded-full" />
          <Title
            fontSize={18}
            fontColor="#0000007e"
            className="min-w-[229px] w-full"
            children={"Ou entre com seu e-mail"}
          />
          <div className="bg-[#0000007e] h-[3px] w-full rounded-full" />
        </div>
        <Input placeholder="Insira seu e-mail" />
        <Checkbox
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          label="Mantenha-me conectado"
          className="self-start"
        />
        <Button
          children={"Acesse a plataforma"}
          color="green"
          onClick={onAccess}
        />
        <Title fontSize={18} fontColor="#0000007e">
          Não tem uma conta?{" "}
          <a href="/cadastro" className="text-[#6CF13F]">
            Crie sua conta
          </a>
        </Title>
      </div>
    </main>
  );
}
