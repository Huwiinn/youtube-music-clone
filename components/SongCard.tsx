import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
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
      <div className="flex gap-4 items-center">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 w-full h-12 justify-end items-center cursor-pointer w-1/2 bg-[rgba(0,0,0,0.6)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
