import { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
  size?: "lg" | "sm";
}

export default function ButtonIcon({ icon: Icon, size }: ButtonIconProps) {
  return <Icon className="text-text" size={size === "lg" ? 16 : 12} />;
}
