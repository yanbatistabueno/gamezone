"use client";

// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import IconButton from "../IconButton";

interface SliderProps {
  type: string;
  children: React.ReactNode;
  settings: SwiperProps;
}
const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};
const styles2 = {
  display: "block",
};

export default function Slider({ settings, children, type }: SliderProps) {
  console.log(children);
  return (
    <div className={`relative ${type == "carousel" ? "w-full" : "px-20"}`}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        {...settings}
        navigation={{
          nextEl: `.${type}button-next`,
          prevEl: `.${type}button-prev`,
        }}
        style={{
          "--swiper-pagination-color": "#D6DCD8",
          "--swiper-pagination-bullet-inactive-color": "#727777",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "swiper-pagination-bullet-active": "2px",
        }}
      >
        {children!.map((element) => {
          return (
            <SwiperSlide style={type == "carousel" ? styles2 : styles}>
              {element}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <IconButton
        className={`${type}button-prev absolute ${
          type == "carousel" ? "left-20" : "left-16"
        } bottom-1/2 z-40 w-9 h-9 bg-secondary text-black rounded-full`}
        click={() => console.log("oi")}
        icon={<FaChevronLeft />}
      />
      <IconButton
        className={`${type}button-next absolute ${
          type == "carousel" ? "right-20" : "right-16"
        } bottom-1/2 z-40 w-9 h-9 bg-secondary text-black rounded-full`}
        click={() => console.log("oi")}
        icon={<FaChevronRight />}
      />
    </div>
  );
}
