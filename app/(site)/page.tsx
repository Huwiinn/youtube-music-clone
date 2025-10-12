import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  const dummyPlayListArray1 = [...dummyPlaylistArray];
  const dummyPlayListArray2 = [await getPlaylistById(1)];
  const dummyPlayListArray3 = [await getPlaylistById(2)];
  const dummyPlayListArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9" />
        <Category />
        <div className="mt-20" />
        {/* carousel */}
        <PlayListCarousel
          title="다시 듣기"
          subTitle="도도에"
          thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          playListArray={[...dummyPlayListArray1]}
        />
        <div className="mt-20" />
        <PlayListCarousel
          title="Sik-K - Lov3"
          subTitle="새로운 앨범"
          playListArray={[...dummyPlayListArray2]}
        />
        <div className="mt-20" />
        <PlayListCarousel
          title="커뮤니티 제공"
          thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          playListArray={[...dummyPlayListArray3]}
        />
        <div className="mt-20" />
        <PlayListCarousel
          title="커버 및 리믹스"
          playListArray={[...dummyPlayListArray4]}
        />
      </div>
    </PagePadding>
  );
};

export default page;
