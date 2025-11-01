"use client";

import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  return (
    <article className="flex gap-4 h-12 w-full items-center relative group">
      <div className="w-12 h-12 relative">
        <Image
          src={song.imageSrc}
          alt={song.name}
          fill
          className="object-cover"
        />
        <section className="hidden group-hover:flex absolute top-0 w-12 h-12 items-center justify-center bg-black cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 h-12 justify-end items-center cursor-pointer w-[120px] bg-[rgba(0,0,0,0.6)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
