import { Title } from "@/components/Title";
import Image from "next/image";

export default function Rastreabilidade() {
  return (
    <main className="flex min-h-screen flex-col bg-white bg-cover bg-no-repeat bg-center items-start justify-center px-40">
      <Title
        children={"Dashboard de Rastreabilidade"}
        fontSize={48}
        className="mb-4"
      />
      <Image
        src={"/images/dashboard_rastreio.png"}
        alt="asd"
        className="w-full object-cover mb-8"
        height={100000000}
        width={100000000}
      />
      <div className="relative w-full rounded-[20px] bg-[#111] p-4">
        <table className="w-full text-sm text-left relative  rounded-[20px]">
          <thead className="text-xs uppercase border-b-2 text-gray-500 border-white border-opacity-20">
            <tr>
              <th scope="col" className="py-3 px-10">
                Transferência
              </th>
              <th scope="col" className="py-3 px-10">
                Quant. de tokens
              </th>
              <th scope="col" className="py-3 px-10">
                Transferido por
              </th>
              <th scope="col" className="py-3 px-10">
                Recebido por
              </th>
              <th scope="col" className="py-3 px-10">
                Data da transferência
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-white border-opacity-20">
              <td className="py-2 px-10 text-[#6CF13F]">Enviado/Recebido</td>
              <td className="py-2 px-10 text-white">18.07 DREX</td>
              <td className="py-2 px-10 text-[#6CF13F]">0xMu08...SN00</td>
              <td className="py-2 px-10 text-[#6CF13F]">0xC364...D2C8</td>
              <td className="py-2 px-10 text-white">
                04 de Dezembro de 2023 - 10:50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
