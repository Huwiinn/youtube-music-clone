"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GridLoader color="#FFA520" />
      <p>Error!</p>
      <p>잠시 후, 다시 시도해주세요.</p>
    </div>
  );
};

export default ErrorMessage;
