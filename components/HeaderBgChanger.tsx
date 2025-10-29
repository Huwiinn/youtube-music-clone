"use client";

import useUIState from "@/hooks/useUIState";
import React, { useEffect } from "react";

const HeaderBgChanger = ({ imageSrc }: { imageSrc: string }) => {
  const { setHeaderImgSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImgSrc(imageSrc);
  }, []);

  return <></>;
};

export default HeaderBgChanger;
