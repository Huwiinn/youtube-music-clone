"use client";

import React from "react";
import { Playlist } from "@/types";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface PlayListCardProps {
  playList: Playlist;
}

const PlayListCard = ({ playList }: PlayListCardProps) => {
  const { id, owner, playlistName, songList = [] } = playList ?? {};
  const { push } = useRouter();

  const songListLength: number | undefined = songList?.length;
  const imgSrc: string = getRandomElementFromArray(songList)?.imageSrc;

  const onClickCard = () => {
    if (id) push(`playlist?list=${id}`);
  };

  const onClickPlay = () => {
    // Todo play
  };

  const defaultImgSrc: string = "https://images.unsplash.com/photo-1707833558984-3293e794031c";

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image src={imgSrc || defaultImgSrc} fill alt="thumbnail" className="object-cover" />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.8)] top-0 w-full h-full">
          <div className="absolute top-4 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-[1.1] bg-[rgba(0,0,0,0.6)]
		 w-[46px] h-[46px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-1
		  "
            onClick={onClickPlay}
          >
            <FiPlay size={24} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <p>{playlistName}</p>
      </section>
      <section>
        <p className="text-neutral-500">
          {`${owner} - 트랙 ${songListLength}개`}
        </p>
      </section>
    </article>
  );
};

export default PlayListCard;
