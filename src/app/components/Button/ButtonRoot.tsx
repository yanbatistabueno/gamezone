import React from "react";

interface ButtonRootProps {
  type: "primary" | "secondary" | "link";
  size: "lg" | "sm";
  children: React.ReactNode;
  full?: boolean;
}

const Button: React.FC<ButtonRootProps> = ({
  type,
  children,
  size,
  full = false,
}: ButtonRootProps) => {
  const renderChild = React.Children.map(
    //@ts-ignore
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, {
        size: size,
      });
    }
  );
  return (
    <button
      className={`rounded-lg ${full ? "w-full justify-center" : "w-max"} ${
        size === "lg" ? "px-4 h-12" : "px-2 h-9"
      } flex items-center gap-2 cursor-pointer hover:opacity-80 ${
        type === "primary"
          ? "bg-primary"
          : type === "secondary"
          ? "bg-secondary"
          : "bg-transparent"
      }`}
    >
      {renderChild}
    </button>
  );
};

export default Button;
