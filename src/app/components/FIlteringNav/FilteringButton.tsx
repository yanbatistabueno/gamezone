import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import CheckBox from "../CheckBox";

interface IFilteringButton {
  name: string;
  options: Array<string>;
}

export default function FilteringButton({ name, options }: IFilteringButton) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setOpenNav((prevOpen) => !prevOpen)}
        className="flex items-center justify-between"
      >
        <p>{name}</p>
        <FaChevronRight
          className={`text-[10px] text-neutral-300 ${
            openNav ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      <ul
        data-visible={openNav ? "true" : "false"}
        className="data-[visible=true]:translate-y-[0rem] data-[visible=true]:max-h-[600px] max-h-0 flex-col flex gap-[10px] transition-all px-4 overflow-hidden"
      >
        {options.map((option) => {
          return (
            <div key={option} className="flex items-center gap-2">
              <CheckBox />
              <p>{option}</p>
            </div>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}
