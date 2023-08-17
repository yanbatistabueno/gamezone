interface ButtonTitleProps {
  title: string;
  size?: "lg" | "sm";
}

export default function ButtonTitle({ title, size }: ButtonTitleProps) {
  return (
    <p
      className={`font-medium ${
        size === "sm" ? "text-sm" : "text-base"
      } text-text`}
    >
      {title}
    </p>
  );
}
