interface IFilteringWrapper {
  children: React.ReactNode;
}

export default function FilteringWrapper({ children }: IFilteringWrapper) {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg border-solid border-[1px] h-max w-64 max-h-[600px]">
      {children}
    </div>
  );
}
