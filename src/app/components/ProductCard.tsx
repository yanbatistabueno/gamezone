"use client";

import { IProduct } from "@/typings/IProduct";
import Link from "next/link";

export default function ProductCard(props: IProduct) {
  return (
    <Link
      onClick={() => console.log("click")}
      href={`/products/${props.id}`}
      className="group border-solid cursor-pointer rounded-md flex gap-1 flex-col h-auto group hover:translate-y-[-0.25rem] transition-all ease"
    >
      <img
        src={props.imageUrls[props.imageUrls.length - 1]}
        alt={`${props.name} image`}
        className="h-auto w-full rounded-md object-cover"
      />
      <div className="">
        <p className="group-hover:text-primary transition-all">{props.name}</p>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-all ">
          R$ {props.price}
        </h3>
      </div>
    </Link>
  );
}
