import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

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
            <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
            <WhiteButton label="뮤직" icon={<FiMusic size={16} />} />
          </div>
        </div>

        {/* pc */}
        <div className="hidden lg:flex items-center gap-4 text-sm mt-4">
          <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
          <WhiteButton label="뮤직" icon={<FiMusic size={16} />} />
          <DarkButton
            className={"w-[230px] flex justify-center"}
            label="구독중 5.18만"
          />
        </div>
      </section>
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
