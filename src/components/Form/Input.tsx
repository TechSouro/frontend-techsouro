import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  width?: string;
  height?: string;
}

export function Input({
  className,
  width = "w-full",
  height = "h-[80px]",
  name,
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={classNames(
        "rounded-[10px] shadow-lg shadow-[#00000048] border-[3px] border-[#00000048] text-black bg-[#fff] transition-all duration-300 ease-in-out no-underline text-[24px] font-bold p-8",
        className,
        height,
        width
      )}
    >
      {props.children}
    </input>
  );
}
