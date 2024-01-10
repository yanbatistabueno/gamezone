import ProductType from "./ProductType";
import GameGenre from "./GameGenre";
import Platforms from "./Platforms";
import GiftCardStores from "./GiftCardStores";

export interface IProduct {
  id: string;
  name: string;
  overview: string;
  description: Array<{ title: string; text: string }>;
  price: number;
  imageUrls: Array<string>;
}

export interface IGame extends IProduct {
  releaseDate: string;
  publisher: string;
  platforms: Array<Platforms>;
  genres: Array<GameGenre>;
}

export const isGame = (product: IProduct): product is IGame =>
  !!(product as IGame)?.platforms;

export interface IConsole extends IProduct {
  manufacturer: string;
}

export const isConsole = (product: IProduct): product is IConsole =>
  !!(product as IConsole)?.manufacturer;

export interface IGiftCard extends IProduct {
  store: string;
}

export const isGiftCard = (product: IProduct): product is IGiftCard =>
  !!(product as IGiftCard)?.store;
