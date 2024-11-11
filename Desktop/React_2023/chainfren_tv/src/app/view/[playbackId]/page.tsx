"use client";
import { getPlaybackInfo } from "@/lib/livepeer";
import { getSrc } from "@livepeer/react/external";
import { PlayerLoading } from "@/components/player/Player";
import PlayerWithChat from "./PlayerWithChat";

export default async function PlayerPage({
  params,
}: {
  params: { playbackId: string };
}) {
  const inputSource = await getPlaybackInfo(params.playbackId);
  const src = getSrc(inputSource);

  return src ? (
    <PlayerWithChat src={src} />
  ) : (
    <PlayerLoading>
      <div className="absolute flex flex-col inset-0 justify-center items-center">
        <span className="text-sm text-black-primary-text">
          Video is not available.
        </span>
        <span className="text-sm text-black-primary-text">
          Please try refreshing the page in a few seconds.
        </span>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Refresh
      </button>
    </PlayerLoading>
  );
}
