interface ButtonWrapperProps {
  children: React.ReactNode;
}

export default function ButtonWrapper({ children }: ButtonWrapperProps) {
  return (
    <div className="flex z-10 items-center gap-2 relative">{children}</div>
  );
}
