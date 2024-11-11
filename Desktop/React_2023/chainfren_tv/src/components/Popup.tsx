import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { PiCalendarCheckBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AlertDialogs } from "./Alert";
import { deleteStream } from "@/app/actions";
import { toast } from "sonner";

interface Option {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

interface PopupProps {
  showOptions: boolean;
  toggleOptions: () => void;
  handleClickOutside: (event: MouseEvent) => void;
  optionsRef: React.RefObject<HTMLDivElement>;
  streamId: string;
}

export const Popup = ({
  showOptions,
  toggleOptions,
  handleClickOutside,
  optionsRef,
  streamId,
}: PopupProps) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await deleteStream(streamId);

      if (response.success) {
        toast.success("Stream deleted successfully");
        // Optionally, you can also close the options here
        toggleOptions();
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the stream.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <div className="relative">
      <BsThreeDotsVertical
        className="text-lg cursor-pointer text-black-primary-text focus:ring-blue-600 focus:ring-2 focus:ring-offset-2 "
        onClick={toggleOptions}
      />
      {showOptions && (
        <div
          ref={optionsRef}
          className="absolute right-0 mt-2 w-60 z-10  bg-white border border-gray-300 rounded shadow-lg"
        >
          <ul>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-border-gray cursor-pointer"
              onClick={toggleOptions}
            >
              <HiLink className="text-black-primary-text font-medium rotate-180" />
              <p className="ml-2">Edit details</p>
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-border-gray cursor-pointer"
              onClick={toggleOptions}
            >
              <AiOutlineEdit className="text-green-500" />
              <p className="ml-2">Copy Stream Link</p>
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-border-gray cursor-pointer"
              onClick={toggleOptions}
            >
              <PiCalendarCheckBold className="text-yellow-500" />
              <p className="ml-2">Schedule stream</p>
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-border-gray cursor-pointer"
              onClick={toggleOptions}
            >
              <BiNotepad className="text-gray-500" />
              <p className="ml-2">Customize channel</p>
            </li>
            {/* Delete Alert Dialog */}
            <AlertDialogs
              title="Delete channel"
              description="Are you sure you want to delete this stream? This action cannot be undone."
              onConfirm={handleDelete}
            >
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 border-b border-border-gray cursor-pointer">
                <RiDeleteBin6Line className="text-red-500" />
                <p className="ml-2">Delete channel</p>
              </li>
            </AlertDialogs>
          </ul>
        </div>
      )}
    </div>
  );
};
