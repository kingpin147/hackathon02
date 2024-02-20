import React from "react";
import logo from "/public/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { InputDemo } from "../Input";

const Header = () => {
  return (
    <div className="flex bg-red-700 justify-between items-center py-4 px-6">
      <Image src={logo} alt="Logo" className="w-40" />
      <ul className="flex gap-x-10 text-lg">
        <li>
          <Link href={"/"}>Female</Link>
        </li>
        <li>
          <Link href={"/"}>Male</Link>
        </li>
        <li>
          <Link href={"/"}>Kids</Link>
        </li>
        <li>
          <Link href={"/"}>All Products</Link>
        </li>
      </ul>

      <InputDemo  />

      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
