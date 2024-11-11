"use client";
import { ChannelCard, AnalyticCard } from "@/components/Card";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { RiVideoAddLine } from "react-icons/ri";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { CreateLivestream } from "@/components/CreateLivestream";
import { deleteStream, getAllStreams } from "../actions";
import { Stream, useFetchStreams } from "@/hooks/useFetchStreams";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const insightsData = [
  {
    title: "Views",
    views: 7265,
    value: -11.02,
    change: "25 from last stream",
  },
  {
    title: "New Users",
    views: 420,
    value: +11.02,
    change: "25 from last stream",
  },
  {
    title: "Active Users",
    views: 500,
    value: -11.02,
    change: "25 from last stream",
  },
];

const Page = () => {
  const { streams, loading, error } = useFetchStreams(getAllStreams);
  const [filteredInsights, setFilteredInsights] = useState(insightsData);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(streams.length / itemsPerPage);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch streams: " + error);
    }
  }, [error]);

  const handleFilterChange = (filterType: string) => {
    setActiveFilter(filterType);
    setFilteredInsights(insightsData); // Update filtering logic as needed
  };
  // Initiate live video
  const initiateLiveVideo = (stream: Stream) => {
    const { playbackId, streamKey, name } = stream;
    if (playbackId && streamKey) {
      Cookies.set("stream-key", streamKey);
      Cookies.set("playback-id", playbackId);
      Cookies.set("name", name);
      toast.success("Navigating to broadcast...");
      router.push("/dashboard/stream");
    } else {
      toast.error("This stream is not available.");
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedStreams = streams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="flex-1">
      <header className="grid bg-white grid-cols-2 gap-6 md:grid-cols-4 p-6 rounded-lg">
        {filteredInsights.map((insight) => (
          <AnalyticCard key={insight.title} {...insight} />
        ))}
        <div className="w-full h-full">
          <ul className="flex flex-col gap-y-2 h-full">
            {["all", "thisMonth", "lastMonth"].map((filter) => (
              <li
                key={filter}
                className={clsx(
                  "text-sm pl-2 py-1 text-black-tertiary-text cursor-pointer font-semibold",
                  activeFilter === filter &&
                    "border-l-4 text-black-primary-text border-main-blue"
                )}
                onClick={() => handleFilterChange(filter)}
              >
                {filter.charAt(0).toUpperCase() +
                  filter.slice(1).replace(/([A-Z])/g, " $1")}
              </li>
            ))}
            <div className="flex justify-start items-end w-2/3 h-full">
              <button
                className="w-full font-semibold text-black-primary-text text-sm flex justify-center items-center py-2 border bg-background-gray rounded-md self-end"
                onClick={() => handleFilterChange("all")}
              >
                View All
              </button>
            </div>
          </ul>
        </div>
      </header>
      <section className="p-6 rounded-lg my-4 bg-white">
        <div>
          <h2 className="text-black-primary-text text-2xl font-bold mb-4">
            Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <div className="flex w-full flex-col">
                  <div className="w-full justify-center flex items-center h-60 rounded-lg cursor-pointer bg-background-gray">
                    <RiVideoAddLine className="text-main-blue w-24 h-24" />
                  </div>
                  <div className="text-black-primary-text text-xl font-bold pt-2">
                    Create new stream channel
                  </div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black-primary-text opacity-80" />
                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] flex mt-4 flex-col justify-center items-center max-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-16 max-sm:px-6 py-6 shadow-lg">
                  <Dialog.Title className="text-black-primary-text text-center my-4 text-base font-bold">
                    Create New Channel
                  </Dialog.Title>
                  <CreateLivestream />
                  <Dialog.Close asChild>
                    <button
                      className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                      aria-label="Close"
                    >
                      <IoMdClose className="text-black-primary-text font-medium text-4xl" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            {loading ? (
              <div className="flex justify-center items-center h-60">
                <RotatingLines
                  visible={true}
                  strokeWidth="5"
                  strokeColor="#3351FF"
                  ariaLabel="rotating-lines-loading"
                  width="70"
                />
              </div>
            ) : (
              paginatedStreams.map((stream) => (
                <div key={stream.id} className="cursor-pointer">
                  <ChannelCard
                    title={stream.name}
                    live={() => initiateLiveVideo(stream)}
                    streamId={stream.id}
                  />
                </div>
              ))
            )}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={clsx(
                    "px-3 py-1 mx-1 rounded-md",
                    currentPage === index + 1
                      ? "bg-main-blue text-white"
                      : "bg-gray-200 text-black"
                  )}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
        <hr className="mt-8 mb-6 border-border-gray" />
        {/* Videos */}
        <div>
          <h2 className="text-black-primary-text text-2xl font-bold mb-4">
            Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video cards would here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
