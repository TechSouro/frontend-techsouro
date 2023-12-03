import React from "react";
import { Title } from "../Title";

interface CheckboxProps {
  className?: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  checked,
  onChange,
  color = "#000",
  disabled = false,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={`cursor-pointer ${className} flex items-center gap-4`}>
      <input
        type="checkbox"
        id={"input"}
        className="cursor-pointer rounded border-[3px] border-[#000]"
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
        style={{
          accentColor: color,
          border: "3px solid",
          borderRadius: "5px",
        }}
      />
      {label && (
        <label htmlFor={"input"}>
          <Title fontSize={18} fontColor="#0000007e" children={label} />
        </label>
      )}
    </div>
  );
};
