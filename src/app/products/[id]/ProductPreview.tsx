"use client";
import {
  IProduct,
  IGame,
  IConsole,
  IGiftCard,
  isGame,
} from "@/typings/IProduct";
import Image from "next/image";
import { useState } from "react";
import DropDownButton from "@/app/components/DropDownButton";
import Button from "@/app/components/Button";
import { FaCartShopping } from "react-icons/fa6";
export default function ProductPreview(props: IGame | IConsole | IGiftCard) {
  const [selectedImage, setImage] = useState(0);
  const [clickedImage, setClickedImage] = useState(0);

  const [selectedChild, setSelectedChild] = useState("");

  function changeSelectedChild(option: string) {
    setSelectedChild(option);
  }
  function changeImageState(i: number) {
    setClickedImage(i);
  }

  return (
    <div className="flex gap-16">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {props.imageUrls.map((image, i) => {
            return (
              <img
                data-active={i == clickedImage ? "true" : "false"}
                className="cursor-pointer transition-opacity w-[88px] data-[active=true]:opacity-100 hover:opacity-100 h-[88px] object-cover rounded-2xl opacity-70"
                src={image}
                onMouseEnter={() => setImage(i)}
                onMouseLeave={() => setImage(-1)}
                onClick={() => changeImageState(i)}
              ></img>
            );
          })}
        </div>
        <img
          className="rounded-2xl w-[400px] h-[400px] object-cover"
          src={
            selectedImage != -1
              ? props.imageUrls[selectedImage]
              : props.imageUrls[clickedImage]
          }
        ></img>
      </div>
      <div className="flex flex-col gap-3">
        <h1>{props.name}</h1>
        <p>{props.overview}</p>
        {isGame(props) && (
          <div className="gap-2 flex flex-col">
            <p>
              <b>Platform</b>
            </p>
            <div className="w-1/2">
              <DropDownButton.wrapper
                visible={false}
                selectedChild={selectedChild}
                full={true}
              >
                {(props as IGame).platforms?.map((platform) => (
                  <DropDownButton.options
                    click={(e: any) => changeSelectedChild(e)}
                    key={platform}
                    title={platform}
                  />
                ))}
              </DropDownButton.wrapper>
            </div>
          </div>
        )}
        <h2>R$ {props.price}</h2>
        <div className="w-1/2">
          <Button.wrapper>
            <Button.root size="lg" full type="primary">
              <Button.title title={"Shop Now"} />
              <Button.icon icon={FaCartShopping} />
            </Button.root>
          </Button.wrapper>
        </div>
      </div>
    </div>
  );
}
