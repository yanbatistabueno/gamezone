import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckBox() {
  const [check, setCheck] = useState(false);
  return (
    <button
      onClick={() => setCheck((prevCheck) => !prevCheck)}
      className={`rounded w-4 h-4 border flex items-center justify-center ${
        check ? "bg-primary border-0" : "border-neutral-200 border-opacity-100"
      }`}
    >
      {check && <FaCheck className="w-1/2" />}
    </button>
  );
}
