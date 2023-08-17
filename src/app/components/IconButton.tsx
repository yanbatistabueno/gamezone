"use client";

interface IconButtonProps {
  icon: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
  click?: () => void;
  children?: any;
}

export default function IconButton({
  icon,
  className,
  click,
  children,
}: IconButtonProps) {
  return (
    <button
      onClick={click}
      className={`${className} cursor-pointer flex items-center justify-center hover:opacity-80`}
    >
      {icon}
    </button>
  );
}
