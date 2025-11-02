"use client";

import React from "react";
import IconButton from "./elements/IconButton";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListHead = ({ playlist }: any) => {
  const { playlistName, owner, songList } = playlist;
  const { addSongList } = usePlayerState();

  const randomSong = getRandomElementFromArray(songList);

  const onClickPlay = (e: any) => {
    e.stopPropagation();
    addSongList(songList);
  };

  return (
    <section>
      <div className="flex gap-[50px]">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-sm">
            <div>{`엘범 ・ ${owner} ・ 2022`}</div>
            <div>{`${songList.length}곡 ・ 20분`}</div>
          </div>
          <ul className="hidden lg:flex flex gap- mt-4">
            <div onClick={onClickPlay}>
              <WhiteButton
                className={"w-[85px] text-sm"}
                icon={<FiPlay />}
                label="재생"
              />
            </div>
            <DarkButton
              className={"w-[135px] text-sm"}
              icon={<FiFolderPlus />}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[85px] text-sm"}
          icon={<FiPlay />}
          label="재생"
        />
        <DarkButton
          className={"w-[135px] text-sm"}
          icon={<FiFolderPlus />}
          label="보관함에 저장"
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
