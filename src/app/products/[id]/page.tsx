import slugify from "@/lib/Slugify";
import ProductPreview from "./ProductPreview";
import {
  IConsole,
  IGame,
  IGiftCard,
  IProduct,
  isGame,
  isConsole,
  isGiftCard,
} from "@/typings/IProduct";
import { api } from "@/lib/api";
import PageOrientation from "@/app/components/PageOrientation";

export default async function ProductsId({ params }) {
  const product: IGame | IConsole | IGiftCard = await getSelectedProduct(
    params
  );

  return (
    <main className="px-20">
      <PageOrientation
        prevPages={[
          "Home",
          "Products",
          isGame(product)
            ? "Games"
            : isConsole(product)
            ? "Console"
            : isGiftCard(product)
            ? "GiftCard"
            : "null",
        ]}
        actualPage={product.name}
      />
      {product ? <ProductPreview {...product} /> : <h1>Product not found</h1>}
    </main>
  );
}

export async function getSelectedProduct<IProduct>(params: { id: string }) {
  const res = await api.get(`/products/${params.id}`);
  const product = res.data;
  return product;
}
