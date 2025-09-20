import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import IconButton from "./IconButton";

const Logo = () => {
  return (
    <section className="flex items-center gap-3">
      <IconButton icon={<RxHamburgerMenu size={24} />}/>
      <Link href="/">
        <Image src="/logo.svg" alt="YT logo" width={100} height={30} />
      </Link>
    </section>
  );
};

export default Logo;
