"use client";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

const Category = () => {
  const libraryCategory: string[] = [
    "재생목록",
    "팟캐스트",
    "노래",
    "앨범",
    "아티스트",
  ];
  const { homeCategory, setHomeCategory, setHomeImgSrc } = useUIState();
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  useEffect(() => {
    // console.log("homeCategory, headerImgSrc : ", homeCategory, headerImgSrc);
  }, [setHomeCategory, setHomeImgSrc]);

  return (
    <div className="flex justify-between items-center gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex gap-4">
        {libraryCategory.map((item, idx: number) => {
          return (
            <li
              key={`${item}+${idx}`}
              className={cn(
                "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div id="dropdown-container">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[162px] h-[42px] flex items-center justify-between p-4 bg-neutral-800 border border-neutral-600 rounded-3xl text-[14px] hover:bg-neutral-300 hover:text-black transition">
              <div>최근 활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] bg-neutral-800" align="end">
            <DropdownMenuLabel className="p-4">정렬 기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10">
                <FiCheck size={20} />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10" />
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-10" />
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Category;
