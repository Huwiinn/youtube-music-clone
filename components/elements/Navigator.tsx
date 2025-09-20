"use client";

import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiCompass, FiMusic, FiPlus } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "../../lib/dummyData";
import PlaylistNav from "./PlaylistNav";

const Navigator = () => {
  const pathname = usePathname();
  console.log("pathname : ", pathname);
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          return (
            <Link key={route.href} href={route.href}>
              {/* "flex gap-4 items-center hover:bg-neutral-700 rounded-lg p-2" */}
              <div
                className={cn(
                  "flex gap-4 items-center hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section id="sidebar-divide-line" className="px-6">
        {/* divide line */}
        <div className="w-full h-[1px] bg-neutral-700 mt-2 mb-4" />
      </section>
      <section id="new-playlist" className="px-6">
        <div className="flex gap-2 items-center bg-neutral-700 rounded-full p-2 cursor-pointer justify-center font-light hover:bg-neutral-600">
          <FiPlus size={24} />
          <p>새 재생목록</p>
        </div>
      </section>
      <section id="sidebar-playlist">
        {dummyPlaylistArray.map((playlist) => {
          return (
            <ul key={playlist.id} className="mt-4">
              <PlaylistNav playlist={playlist} />
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default Navigator;
