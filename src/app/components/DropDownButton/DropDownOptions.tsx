interface DropDownOptionsProps {
  title: string;
  click: (e: any) => void;
}

export default function DropDownOptions({
  title,
  click,
}: DropDownOptionsProps) {
  return (
    <button
      onClick={(e: any) => click(e.target.innerHTML)}
      className="px-4 py-[10px] hover:bg-secondary text-left w-full"
    >
      {title}
    </button>
  );
}
