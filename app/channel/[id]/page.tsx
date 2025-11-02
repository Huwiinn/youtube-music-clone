import ChannelHead from "@/components/ChannelHead";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const page = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id));

  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]" />
      <ChannelHead channel={channel} />
      <section className="mt-20">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-5">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => {
              return (
                <li key={idx}>
                  <SongCardRowExpand song={song} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="mt-20">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel playListArray={channel.playlistArray} />
      </section>
      <div className="mt-20" />
    </PagePadding>
  );
};

export default page;
