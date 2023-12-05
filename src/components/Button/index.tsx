import classNames from "classnames";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  color?: string | undefined;
  width?: string;
  disabled?: boolean;
  fontHeight?: string;
  height?: string;
  loading?: boolean;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
  color,
  width = "w-full",
  height = "h-[80px]",
  disabled,
  fontHeight,
  loading,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        "rounded-[10px] shadow-lg shadow-[#00000048] transition-all duration-300 ease-in-out no-underline text-[24px] font-bold",
        {
          "active:scale-[0.98] bg-[#111] text-[#EBEBEB] hover:bg-[#6CF13F] hover:text-[#000] disabled:bg-opacity-50":
            color === "black",
        },
        {
          "active:scale-[0.98] bg-[#6CF13F] text-[#111] hover:bg-[#111] hover:text-[#6CF13F] disabled:bg-opacity-50":
            color === "green",
        },
        {
          "active:scale-[0.98] bg-[#EBEBEB] text-[#111] hover:bg-[#6CF13F] hover:text-[#000] disabled:bg-opacity-50 ring-[3px] ring-black hover:ring-0":
            color === "white",
        },
        className,
        height,
        width,
        fontHeight
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
