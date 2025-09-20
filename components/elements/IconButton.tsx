"use client";

import React from "react";

const IconButton = ({ icon }: { icon: React.ReactNode }) => {
  const onClick = () => {
    console.log("Icon clicked");
  };

  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center cursor-pointer rounded-full p-2 transition hover:bg-[rgba(144,144,144,0.6)]"
    >
      {icon}
    </div>
  );
};

export default IconButton;
