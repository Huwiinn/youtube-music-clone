"use client";

import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import IconButton from "./IconButton";
import { IoClose } from "react-icons/io5";

const onClickMenu = () => {};

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  return (
    <section className={"flex items-center gap-3"}>
      {isInDrawer ? (
        <IconButton icon={<IoClose size={30} onClick={onClickClose} />} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} onClick={onClickMenu} />}
        />
      )}

      <Link href="/">
        <Image src="/logo.svg" alt="YT logo" width={100} height={30} />
      </Link>
    </section>
  );
};

export default Logo;
