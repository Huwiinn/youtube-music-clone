import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";

const page = async () => {
  // const playlistArr = await getAllPlaylist();
  // const songListTop10 = await getSongListTop10();

  const [playlistArr, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4" />
      <Category />
      <div className="mt-20" />
      <PlayListCarousel playListArray={playlistArr} title="새 엘범 및 싱글" />
      <div className="mt-20" />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
    </PagePadding>
  );
};

export default page;
