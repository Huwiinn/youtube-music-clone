"use client";
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

const Category = () => {
  const { homeCategory, headerImgSrc, setHomeCategory, setHomeImgSrc } =
    useUIState();

  const data = homeCategoryList;
  const onClickCategory = (item: any) => {
    console.log("item : ", item);
    if (homeCategory === item.label) {
      setHomeImgSrc("");
      setHomeCategory("");
    } else {
      setHomeImgSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  useEffect(() => {
    console.log("homeCategory, headerImgSrc : ", homeCategory, headerImgSrc);
  }, [setHomeCategory, setHomeImgSrc]);

  return (
    <ul className="max-w-full overflow-x-auto flex gap-4">
      {data.map((item, idx: number) => {
        return (
          <li
            key={`${item.label}+${idx}`}
            className={cn(
              "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
              item.label === homeCategory &&
                "bg-white text-black hover:bg-white"
            )}
            onClick={() => onClickCategory(item)}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
