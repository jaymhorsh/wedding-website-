import { FaBan, FaFlag, FaVolumeMute } from "react-icons/fa";
import type React from "react";
import clsx from "clsx";
import { FaUser } from "react-icons/fa6";

interface UserCardProps {
  userId: string;
  name: string;
  ban: boolean;
  mute: boolean;
}

const RestrictedUserCard: React.FC<UserCardProps> = ({
  userId,
  name,
  ban,
  mute,
}) => {
  return (
    <div
      className={clsx(
        "bg-pubnub-dark shadow overflow-hidden rounded-lg p-4 mb-2 flex justify-between items-center",
      )}
      key={userId}
    >
      <p className="text-md text-pubnub-white font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
       <FaUser className="text-2xl"/> {name}
      </p>
      <div className="flex items-center min-w-[100px] justify-end">
        {ban && (
          <div className="tooltip" data-tip="Banned">
            <FaBan className="text-pubnub-red ml-2" />
          </div>
        )}
        {mute && (
          <div className="tooltip" data-tip="Muted">
            <FaVolumeMute className="text-pubnub-light-grey ml-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestrictedUserCard;
