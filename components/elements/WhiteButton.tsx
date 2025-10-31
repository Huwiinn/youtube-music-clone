"use client";
import { cn } from "@/lib/utils";
import React from "react";

const WhiteButton = ({
  icon,
  label,
  className,
  ...props
}: {
  icon: React.ReactNode;
  label: string;
  className: any;
  props?: any;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer bg-white text-black rounded-2xl flex items-center min-w-[80px] h-9 p-4 gap-2 hover:bg-neutral-200 ",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
