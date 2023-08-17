"use client";
import SearchInput from "./SearchInput";
import { FaChevronDown, FaCartShopping, FaUser } from "react-icons/fa6";
import Button from "./Button";
import { NextFont } from "next/dist/compiled/@next/font";

interface HeaderProps {
  logoFont: NextFont;
}

export default function Header({ logoFont }: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-around h-20">
        <button className={`${logoFont.className} logo mr-5`}>GameZone</button>
        <SearchInput />
        <Button.wrapper>
          <Button.root size="lg" type="link">
            <Button.icon icon={FaCartShopping} />
            <Button.title title="My Cart" />
            <Button.icon icon={FaChevronDown} />
          </Button.root>
        </Button.wrapper>
        <Button.wrapper>
          <Button.root size="lg" type="link">
            <Button.icon icon={FaUser} />
            <Button.title title="My Account" />
            <Button.icon icon={FaChevronDown} />
          </Button.root>
        </Button.wrapper>
      </header>
    </>
  );
}
