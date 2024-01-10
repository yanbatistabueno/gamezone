"use client";
import PageOrientation from "../components/PageOrientation";
import { FaChevronRight } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";
import DropDownButton from "../components/DropDownButton";
import { useFetch } from "../hooks/useFetch";
import { IGame } from "@/typings/IProduct";
import { useState } from "react";
import FilteringNav from "../components/FIlteringNav";
interface IGameResponse {
  products: Array<IGame>;
  totalPages: number;
  totalProducts: number;
}
export default function Products() {
  const { data: productResponse, isFetching } =
    useFetch<IGameResponse>("/products/games");

  const [selectedChild, setSelectedChild] = useState("");

  function changeSelectedChild(option: string) {
    setSelectedChild(option);
  }

  return (
    <main className="px-20">
      <PageOrientation prevPages={["Home", "Products"]} actualPage="Games" />
      <div className="flex gap-8">
        <FilteringNav.wrapper>
          <FilteringNav.button
            name={"Genre"}
            options={[
              "Metroidvania",
              "Sandbox",
              "Adventure",
              "Action",
              "Role-Playing",
              "Fighting",
              "Survival Horror",
              "Roguelike",
              "Platformer",
              "Sports",
              "Simulation",
            ]}
          />
          <FilteringNav.button
            name={"Platform"}
            options={["PC", "Xbox", "Playstation"]}
          />
        </FilteringNav.wrapper>
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center ">
              <p>
                <b>You searched for: </b> call of duty
              </p>
              <div className="flex gap-4 items-center">
                <b>Sort by</b>
                <DropDownButton.wrapper
                  visible={false}
                  selectedChild={selectedChild}
                  full={false}
                >
                  <DropDownButton.options
                    click={(e: any) => changeSelectedChild(e)}
                    title={"Popularity"}
                  />
                  <DropDownButton.options
                    click={(e: any) => changeSelectedChild(e)}
                    title={"Trending"}
                  />
                </DropDownButton.wrapper>
              </div>
            </div>
            <div>
              <b>Filtering by:</b>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-4 grid-cols-3 gap-8">
            {productResponse?.products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
