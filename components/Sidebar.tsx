"use client";
import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import usePlayerState from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isVisiblePlayer } = usePlayerState();

  return (
    <div
      className={cn("flex h-full ", isVisiblePlayer && "h-[calc(100vh-72px)]")}
    >
      <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
        <div className="p-6">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
};

export default Sidebar;
