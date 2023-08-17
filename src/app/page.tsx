"use client";

import { useContext } from "react";

import Slider from "./components/Slider";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import "swiper/css";

import { SwiperProps } from "swiper/react";

import { ProductContext } from "@/context/ProductContext";

export default function Home() {
  const { products } = useContext(ProductContext);

  const slideSettings = {
    spaceBetween: 0,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
  };
  const productsList: SwiperProps = {
    navigation: true,
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      920: {
        slidesPerView: 3,
      },
    },
  };
  const featuredGames = [
    "The Witcher 3: Wild Hunt",
    "Bloodborne",
    "Marvel's Spider-Man",
  ];
  return (
    <main>
      <Slider.Swiper type="carousel" settings={slideSettings}>
        {products
          .filter((product) => featuredGames.includes(product.name))
          .sort((a, b) => b.price - a.price)
          .map((product) => {
            return <Carousel key={product.id} {...product} />;
          })}
      </Slider.Swiper>
      <h1 className="mb-4 font-semibold text-3xl ml-10">Trending</h1>
      <div className="w-full pt-4 pb-8">
        <Slider.Swiper type="product-card" settings={productsList}>
          {products
            .filter((product) => product.price > 100 && product.price < 250)
            .sort((a, b) => b.price - a.price)
            .map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
        </Slider.Swiper>
      </div>
    </main>
  );
}
