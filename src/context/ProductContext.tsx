"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "@/lib/api";
import Products from "@/lib/Products";
import { IProduct } from "@/typings/IProduct";

export const ProductContext = createContext<{
  products: IProduct[];
  isFetching: boolean;
}>({
  products: [],
  isFetching: true,
});

function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // setProducts(Products);
    api
      .get("/product")
      .then((response) => setProducts(response.data))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <ProductContext.Provider value={{ products, isFetching }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
