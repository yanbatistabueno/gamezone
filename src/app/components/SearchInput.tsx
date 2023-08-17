"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import IconButton from "./IconButton";

interface IconButtonProps {
  className?: React.ComponentProps<"div">["className"];
}

export default function Search({ className }: IconButtonProps) {
  return (
    <div
      className={`${className} flex w-7/12 max-w-lg gap-4 px-4 py-2 border border-solid rounded-lg`}
    >
      <IconButton
        icon={<FaMagnifyingGlass />}
        className="w-4 text-neutral-300 rounded-r-md"
      />
      <input
        className="w-full max-w-lg bg-transparent outline-none rounded-l-md text-neutral-300"
        type="text"
        placeholder="Search all products"
      />
    </div>
  );
}
