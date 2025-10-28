import { genreRandomHex } from "@/lib/utils";
import React from "react";

const GenreCard = ({ genre }: { genre: string }) => {
  const hex = genreRandomHex();

  return (
    <div className="flex h-12 w-full cursor-pointer bg-neutral-800 rounded-lg">
      <div
        className="w-2 h-full rounded-l-lg"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="flex justify-center items-center px-4">{genre}</div>
    </div>
  );
};

export default GenreCard;
