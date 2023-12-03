type Props = {
  children: React.ReactNode;
  fontSize?: string | number;
  fontWeight?: string;
  fontColor?: string;
  className?: string;
};

export function Title({
  children,
  fontSize = "48px",
  fontWeight = "bold",
  fontColor = "black",
  className,
}: Props) {
  return (
    <h1
      style={{ fontSize, fontWeight, color: fontColor, lineHeight: "56px" }}
      className={className}
      children={children}
    />
  );
}
