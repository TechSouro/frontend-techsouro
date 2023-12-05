import { Title } from "../Title";

const Tabela = ({ title }: any) => {
  if (!title) return <></>;
  return (
    <div className="overflow-x-auto relative rounded-[20px] border-[3px] border-[rgba(17,17,17,.50)]">
      <Title fontSize={24} className="h-14 flex items-center justify-center">
        Itens Listados
      </Title>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase border-y-[3px] border-[rgba(17,17,17,.50)]">
          <tr>
            <th scope="col" className="py-3 px-6">
              Preço unitário
            </th>
            <th scope="col" className="py-3 px-6">
              Preço em R$
            </th>
            <th scope="col" className="py-3 px-6">
              Quantidade
            </th>
            <th scope="col" className="py-3 px-6">
              Vencimento
            </th>
            <th scope="col" className="py-3 px-6">
              Endereço
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[#111]">
            <td className="py-2 px-6">{title.minValue} DREX</td>
            <td className="py-2 px-6">{title.minValue} R$</td>
            <td className="py-2 px-6">{title.totalAmount}</td>
            <td className="py-2 px-6">{title.yearsDuration}</td>
            <td className="py-2 px-6">0x1B6...E5d0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
