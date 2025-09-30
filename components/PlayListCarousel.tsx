import { Playlist } from "@/types";
import React from "react";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumnail?: React.ReactNode;
  playListArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  Thumnail,
  playListArray,
}) => {
  return (
    <div>
      {/* {Thumnail}
      {title} - {subTitle}
      {JSON.stringify(playListArray)} */}
    </div>
  );
};

export default PlayListCarousel;
