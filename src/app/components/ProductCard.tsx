"use client";

import { IProduct } from "@/typings/IProduct";

export default function ProductCard(props: IProduct) {
  return (
    <>
      <div
        onClick={() => console.log("click")}
        className="group border-solid cursor-pointer rounded-md flex gap-1 flex-col h-auto w-[300px]  group hover:scale-95 transition-all"
      >
        <div className="h-[300px]">
          <img
            src={props.url[props.url.length - 1]}
            alt={`${props.name} image`}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="">
          <p className="group-hover:text-primary transition-all">
            {props.name}
          </p>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-all ">
            R$ {props.price}
          </h3>
        </div>
      </div>
    </>
  );
}
