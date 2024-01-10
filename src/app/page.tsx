"use client";

import Slider from "./components/Slider";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import "swiper/css";

import { SwiperProps } from "swiper/react";
import { IGame, IProduct } from "@/typings/IProduct";
import { useFetch } from "./hooks/useFetch";
import { api } from "@/lib/api";

interface IGameResponse {
  products: Array<IGame>;
  totalPages: number;
  totalProducts: number;
}

export default function Home() {
  const { data: productResponse, isFetching } = useFetch<IGameResponse>(
    "/products/games?size=50"
  );
  const slideSettings: SwiperProps = {
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
    autoplay: true,
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
    "Hades",
    "Marvel's Spider-Man",
  ];

  return (
    <main>
      {!isFetching && (
        <Slider.Swiper type="carousel" settings={slideSettings}>
          {productResponse?.products
            .filter((product) => featuredGames.includes(product.name))
            .sort((a, b) => b.price - a.price)
            .map((product) => {
              console.log(product);
              return <Carousel key={product.id} {...product} />;
            })}
        </Slider.Swiper>
      )}
      <h1 className="mb-4 font-semibold text-3xl ml-10">Trending</h1>
      <div className="w-full pt-4 pb-8">
        {!isFetching && (
          <Slider.Swiper type="product-card" settings={productsList}>
            {productResponse?.products
              .filter((product) => product.price > 100 && product.price < 250)
              .sort((a, b) => b.price - a.price)
              .map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })}
          </Slider.Swiper>
        )}
      </div>
    </main>
  );
}
