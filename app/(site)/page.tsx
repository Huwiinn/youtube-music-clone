import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  const dummyPlayListArray1 = [...dummyPlaylistArray];

  console.log("dummyPlayListArray1", dummyPlayListArray1);

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9" />
        <Category />
        <div className="mt-12" />
        {/* carousel */}
        <PlayListCarousel
          title="음악 타이틀"
          subTitle="서브타이틀"
          Thumnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon />
            </div>
          }
          playListArray={[...dummyPlayListArray1]}
        />
      </div>
    </PagePadding>
  );
};

export default page;
