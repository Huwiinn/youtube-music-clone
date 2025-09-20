"use client";

import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <BeatLoader
        color="#FFA520"
        cssOverride={{ width: "50%", height: "50%" }}
      />
    </div>
  );
};

export default LoadingBar;
