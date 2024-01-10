import { FaChevronRight } from "react-icons/fa6";
interface PageOrientationProps {
  prevPages: Array<string>;
  actualPage: string;
}
export default function PageOrientation({
  prevPages,
  actualPage,
}: PageOrientationProps) {
  return (
    <div className="flex items-center gap-4 py-8">
      {prevPages.map((page) => {
        return (
          <div key={page} className="flex gap-2 items-center">
            <p className="text-neutral-300">{page}</p>
            <FaChevronRight className="text-[10px] text-neutral-300" />
          </div>
        );
      })}

      <p className="text font-semibold">{actualPage}</p>
    </div>
  );
}
