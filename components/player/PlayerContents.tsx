import React, { useCallback, useEffect } from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContents = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src as string,
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPreBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }

    if (prevPlayerQueue.length === 0) return;

    playBack();
  };

  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };

  const onClickPauseBtn = () => {
    // 스페이스바 누르면 일시정지되도록 함수 만들기. 그리고 한 번 더 누르면 다시 재생
    if (activeSong && state.playing) {
      controls.pause();
    } else {
      playNext();
    }
  };

  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, nextPlayerQueue]);

  useEffect(() => {
    ref?.current?.addEventListener("ended", onClickNextBtn);

    return () => {
      ref?.current?.removeEventListener("ended", onClickNextBtn);
    };
  }, [ref, onClickNextBtn]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => controls.seek(value[0])} // value값 log 다시 찍어서 number type인지 확인 필요함
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="flex items-center h-full gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPreBtn}
          />
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article>
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc as string}
                alt={activeSong?.name as string}
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-sm text-neutral-400">
                {activeSong?.channel} ・ 조회수 3,000회 ・ 좋아요 518개{" "}
              </div>
            </div>
          </div>
        </article>
        <div className="flex w-full max-w-[200px] justify-between">
          <div className="flex gap-2">
            <div className="hidden lg:flex gap-2">
              <IoVolumeHighOutline size={24} className="cursor-pointer" />
              <IoShuffle size={24} className="cursor-pointer" />
              <RxLoop size={24} className="cursor-pointer" />
            </div>
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContents;
