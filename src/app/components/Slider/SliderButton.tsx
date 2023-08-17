"use client";
import Slugify from "@/lib/Slugify";
import "./Swiper.css";
import IconButton from "../IconButton";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface SliderButtonProps {
  type: string;
}

export default function SliderButton({ type }: SliderButtonProps) {
  return (
    <IconButton
      icon={type == "next" ? <FaChevronRight /> : <FaChevronLeft />}
      click={() => console.log("clicou")}
      className="button-prev bg-secondary text-black w-9 h-9 rounded-full "
    />
  );
}
