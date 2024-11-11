"use client";
import React, { useRef, useState } from "react";
import { Popup } from "./Popup";
import { BiSolidDownArrow, BiSolidUpArrow, BiNotepad } from "react-icons/bi";

interface AnalyticCardProps {
  title: string;
  views: number;
  value: number;
  change: string;
}
interface ChannelCardProps {
  title: string;
  live: () => void;
  streamId: string;
}
export const AnalyticCard = ({
  title,
  views,
  change,
  value,
}: AnalyticCardProps) => {
  return (
    <div className="w-full h-full ">
      <div className=" border flex flex-col justify-center bg-background-gray border-border-gray rounded-lg p-4 gap-y-5">
        <div className="">
          <p className="text-2xl  font-bold">{title}</p>
          <p className="-text-black-secondary-text font-medium text-sm">
            {change}
          </p>
        </div>
        <div>
          <p className="text-4xl font-extrabold tracking-wide">{views}</p>
          <p className="text-xs  flex items-center gap-1">
            <span className="text-black-secondary-text">{value}</span>
            <span>
              {value < 0 ? (
                <BiSolidDownArrow className="text-orange-drop text-xs" />
              ) : (
                <BiSolidUpArrow className="text-green-drop text-xs" />
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ChannelCard = ({ title, live, streamId}: ChannelCardProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <div className="w-full h-60 bg-background-gray rounded-md"></div>
      {/* Title */}
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-black-primary-text text-lg pt-2">
            {title}
          </div>
        </div>
        <div className="ml-auto pt-2">
          {/* Popup */}
          <Popup
            showOptions={showOptions}
            toggleOptions={toggleOptions}
            handleClickOutside={handleClickOutside}
            optionsRef={optionsRef}
            streamId={streamId}
            
          />
        </div>
      </div>
      <div className="flex justify-start">
        <button
          className="mt-2 bg-main-blue text-white py-2 text-sm font-bold px-4 rounded-[4px]"
          onClick={live}

        >
          Go Live
        </button>
      </div>
    </div>
  );
};
