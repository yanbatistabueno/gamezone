import IconButton from "./IconButton";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";
export default function Footer(props: any) {
  return (
    <div className="px-20 py-8 flex flex-col gap-8 bg-neutral-100">
      <div className="flex gap-32">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h5 className="text-neutral-400">Dúvidas</h5>
            <p className="text-neutral-400 whitespace-nowrap">About GameZone</p>
            <p className="text-neutral-400">Refund Policy</p>
            <p className="text-neutral-400">Payment Methods</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-neutral-400">Products</h5>
            <p className="text-neutral-400">Games</p>
            <p className="text-neutral-400">Gift Cards</p>
            <p className="text-neutral-400">Consoles</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-neutral-400">Customer</h5>
            <p className="text-neutral-400">My account</p>
            <p className="text-neutral-400">My orders</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <h1 className={`${props.logoFont.className} logo`}>GameZone</h1>
          <p className="text-neutral-400">
            Born from a gamer's passion, we are a vibrant virtual sanctuary that
            unites players of all generations, offering exceptional products and
            a welcoming community dedicated to the ongoing celebration of gamer
            culture.
          </p>
          <div className="flex justify-end gap-4">
            <IconButton
              className="text-white bg-neutral-400 w-12 h-12 rounded-full text-lg"
              icon={<FaInstagram />}
            />
            <IconButton
              className="text-white bg-neutral-400 w-12 h-12 rounded-full text-lg"
              icon={<FaTwitter />}
            />
            <IconButton
              className="text-white bg-neutral-400 w-12 h-12 rounded-full text-lg"
              icon={<FaFacebook />}
            />
          </div>
        </div>
      </div>
      <hr className="bg-neutral-300 border-neutral-300" />
      <p className="text-center text-neutral-400">
        Copyrights © 2023 GameZone. All Rights Reserved.
      </p>
    </div>
  );
}
