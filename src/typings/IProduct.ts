import ProductType from "./ProductType";
import GameGenre from "./GameGenre";
import Platforms from "./Platforms";
import GiftCardStores from "./GiftCardStores";

export interface IProduct {
  id: string;
  name: string;
  description: Array<string>;
  price: number;
  type: ProductType;
  info: string | GameInfo | GiftCardInfo | ConsoleInfo;
  url: string;
}

type GameInfo = {
  genre: Array<GameGenre>;
  publisher: string;
  releaseDate: string;
  platform: Array<Platforms>;
};

type GiftCardInfo = {
  store: GiftCardStores;
};

type ConsoleInfo = {
  brand: Platforms;
};
