import { BroadcastWithControls } from "@/components/broadcast/Broadcast";
import { ChatContextProvider } from "@/components/chat/context/ChatContext";
import { Chat } from "@/components/chat/Chat";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Broadcast = () => {
  const streamKey = cookies().get("stream-key")?.value;
  const playbackId = cookies().get("playback-id")?.value;
  const name = cookies().get("name")?.value;
  const host = headers().get("host");

  // Construct playback URL based on host and playbackId
  const playbackUrl =
    host && playbackId
      ? `${
          host.includes("localhost") ? "http" : "https"
        }://${host}/view/${playbackId}`
      : null;
  return (
    <div className="grid grid-cols-8 h-full relative bg-black overflow-hidden">
      {!streamKey || !playbackId || !playbackUrl ? (
        <div className="flex flex-col flex-1 h-full justify-center items-center gap-3 col-span-8">
          <h1 className="justify-center text-right flex text-3xl font-medium mr-3">
            Go live to an audience in seconds
          </h1>
          <Link href="/dashboard">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Go Live
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col col-span-8 md:col-span-6 items-center gap-8 py-12 md:py-8 p-4 text-center">
          <div>
            <div className="flex gap-2 max-w-lg text-center flex-col">
              <span className="text-2xl font-semibold">{name}</span>
              <span className="text-sm">
                Welcome to your captivating viewer chat experience, using PubNub
                and Livepeer to deliver real-time streaming and interactivity
                with only a few lines of code.
              </span>
            </div>
            <span className="h-px w-full max-w-md bg-gradient-to-r from-white/5 via-white/60 to-white/5" />
          </div>

          <div className="w-full max-w-2xl gap-2 flex flex-col items-center mx-auto transition animate-in fade-in-0 duration-1000">
            <BroadcastWithControls
              streamKey={streamKey}
              playbackUrl={playbackUrl}
            
            />
          </div>
        </div>
      )}

      <div className="col-span-8 md:col-span-2 h-full">
        {/* <ChatContextProvider>
          <Chat playbackId={playbackId} />
        </ChatContextProvider> */}
      </div>
    </div>
  );
};

export default Broadcast;
