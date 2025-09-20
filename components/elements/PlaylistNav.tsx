"use client";

import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

interface IPlaylist {
  id: number;
  owner: string;
  playlistName: string;
  songList: any[];
}

const PlaylistNav = ({ playlist }: { playlist: IPlaylist }) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClick = () => {
    console.log("Playlist clicked");
    // todo: play music
  };

  return (
    <li className="flex items-center justify-between mx-3 p-2 mb-1 hover:bg-neutral-700 rounded-lg group">
      <div className="flex flex-col">
        <p className="text-sm">{playlistName}</p>
        <p className="text-xs font-[300] text-neutral-500">{owner}</p>
      </div>

      <div>
        <div
          onClick={onClick}
          className="hidden group-hover:block cursor-pointer"
        >
          <IoMdPlayCircle size={32} />
        </div>
      </div>
    </li>
  );
};

export default PlaylistNav;
