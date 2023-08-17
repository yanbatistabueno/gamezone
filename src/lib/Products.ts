import { IProduct } from "@/typings/IProduct";

const Products: IProduct[] = [
  {
    type: "GAME",
    name: "Elden Ring",
    url: "https://picsum.photos/200",
    price: 250.0,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION", "STEAM", "XBOX"],
      releaseDate: "2022-02-25",
    },
  },
  {
    type: "CONSOLE",
    name: "Xbox Series S",
    url: "https://picsum.photos/200",
    price: 2649.0,
    info: { brand: "XBOX" },
  },
  {
    type: "GAME",
    name: "Dark Souls Remastered",
    url: "https://picsum.photos/200",
    price: 250.0,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION", "STEAM", "XBOX"],
      releaseDate: "2022-02-25",
    },
  },
  {
    type: "GAME",
    name: "Bloodborne",
    url: "https://picsum.photos/200",
    price: 250.0,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION"],
      releaseDate: "2022-02-25",
    },
  },
  {
    type: "GAME",
    name: "Demon Souls Remake",
    url: "https://picsum.photos/200",
    price: 250.0,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION"],
      releaseDate: "2022-02-25",
    },
  },
  {
    type: "GAME",
    name: "Dark Souls 2 Scholar of The First Sin",
    url: "https://picsum.photos/200",
    price: 250.0,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION"],
      releaseDate: "2022-02-25",
    },
  },
  {
    type: "GAME",
    name: "Dark Souls 3",
    url: "https://picsum.photos/200",
    price: 250.25,
    info: {
      genre: ["ACTION"],
      publisher: "FromSoftware",
      platform: ["PLAYSTATION"],
      releaseDate: "2022-02-25",
    },
  },
];
export default Products;
