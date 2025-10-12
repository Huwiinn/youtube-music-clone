import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar
      className={cn("w-[32px] h-[32px]", size === "lg" && "w-[56px] h-[56px]")}
    >
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
