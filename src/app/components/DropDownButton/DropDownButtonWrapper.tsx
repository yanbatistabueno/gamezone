import { FaChevronDown } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
interface DropDownButtonWrapperProps {
  children: React.ReactNode;
  selectedChild: string;
  visible: boolean;
  full: boolean;
}

export default function DropDownButtonWrapper({
  children,
  selectedChild,
  visible,
  full,
}: DropDownButtonWrapperProps) {
  const [openChildren, setOpenChildren] = useState(visible);
  const selectedText = children[0].props.title;
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && openChildren) {
        setOpenChildren(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [openChildren]);

  if (children.length > 1) {
    return (
      <div
        onClick={() => setOpenChildren((prev) => !prev)}
        ref={menuRef}
        className={`relative flex justify-between items-center border-solid border-[1px] ${
          openChildren ? "border-[2px]" : ""
        } border-neutral-100 cursor-pointer bg-white rounded-lg w-[166px] px-4 h-12  font-medium ${
          full ? "w-full" : ""
        }`}
      >
        <div>{selectedChild == "" ? "Select" : selectedChild}</div>
        <ul
          data-active={openChildren ? "true" : "false"}
          className="absolute z-50 top-12 left-0 drop-shadow-lg data-[active=true]:block hidden bg-white w-full"
        >
          {children}
        </ul>
        <div className="text-sm text-neutral-300 h-full flex items-center">
          <FaChevronDown
            className={`${openChildren ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative flex justify-between items-center border-solid border-[1px] border-neutral-100 bg-white rounded-lg px-4 h-12 font-medium w-max">
        {selectedText}
      </div>
    );
  }
}
