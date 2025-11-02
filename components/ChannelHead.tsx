"use client";
import React from "react";
import DarkButton from "./elements/DarkButton";
import WhiteButton from "./elements/WhiteButton";
import { FiMusic, FiShuffle } from "react-icons/fi";
import usePlayerState from "@/hooks/usePlayerState";

function shuffledArray(array: any[]) {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i * 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const ChannelHead = ({ channel }: any) => {
  const { addSongList } = usePlayerState();

  const onClickShuffle = (e: any) => {
    e.stopPropagation();
    addSongList(shuffledArray(channel.songList));
  };

  const onClickPlay = (e: any) => {
    e.stopPropagation();
    addSongList(channel.songList);
  };

  return (
    <section>
      <div className="text-[28px] font-bold">{channel.name}</div>
      {/* mobile */}
      <div className="mt-4 lg:hidden">
        <div className="flex items-center gap-4 text-sm mt-4">
          <DarkButton
            className={"w-[230px] flex justify-center"}
            label="구독중 5.18만"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <div onClick={onClickShuffle}>
            <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
          </div>
          <div onClick={onClickPlay}>
            <WhiteButton label="뮤직" icon={<FiMusic size={16} />} />
          </div>
        </div>
      </div>

      {/* pc */}
      <div className="hidden lg:flex items-center gap-4 text-sm mt-4">
        <div onClick={onClickShuffle}>
          <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
        </div>
        <div onClick={onClickPlay}>
          <WhiteButton label="뮤직" icon={<FiMusic size={16} />} />
        </div>
        <DarkButton
          className={"w-[230px] flex justify-center"}
          label="구독중 5.18만"
        />
      </div>
    </section>
  );
};

export default ChannelHead;
