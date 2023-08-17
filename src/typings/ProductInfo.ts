import GameGenre from "./GameGenre";
import GiftCardStores from "./GiftCardStores";
import Platforms from "./Platforms";

export interface GameInfo {
  genre: Array<GameGenre>;
  publisher: string;
  releaseDate: string;
  platform: Array<Platforms>;
}

export interface GiftCardInfo {
  store: GiftCardStores;
}

export interface ConsoleInfo {
  brand: Platforms;
}
