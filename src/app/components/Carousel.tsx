import { IProduct } from "@/typings/IProduct";
import Button from "./Button";
import { FaChevronRight } from "react-icons/fa6";
import Slugify from "@/lib/Slugify";
export default function Carousel(props: IProduct) {
  return (
    <>
      <div className="w-full h-[400px] relative">
        <div className="w-full h-full flex flex-col items-center bg-black justify-center">
          <div className="w-4/5 text-center flex p-5 flex-col items-center  gap-8 justify-center">
            <h1 className="z-10 relative text-6xl font-semibold text-white">
              {props.name}
            </h1>
            <Button.wrapper>
              <Button.root size="lg" type="primary">
                <Button.title title={"Shop Now"} />
                <Button.icon icon={FaChevronRight} />
              </Button.root>
            </Button.wrapper>
          </div>

          <img
            // src={props.url}
            src={props.url[1]}
            alt={`${props.name} image`}
            className="h-full w-full object-cover absolute top-0 z-0 opacity-40"
          />
        </div>
      </div>
    </>
  );
}
