import { FaBan, FaFlag, FaVolumeMute } from "react-icons/fa";
import type React from "react";
import clsx from "clsx";

interface FlaggedUserCardProps {
  userId: string;
  name: string;
  ban: boolean;
  mute: boolean;
  flagCount: number;
}

const FlaggedUserCard: React.FC<FlaggedUserCardProps> = ({
  userId,
  name,
  ban,
  mute,
  flagCount,
}) => {
  return (
    <div
      className={clsx(
        "bg-pubnub-dark shadow overflow-hidden rounded-lg p-4 mb-2 flex justify-between items-center",
      )}
      key={userId}
    >
      <p className="text-md  font-medium text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {name}
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
        {flagCount > 0 && (
          <div className="tooltip" data-tip={`Flagged ${flagCount} times`}>
            <FaFlag className="text-pubnub-yellow ml-2" />
            <span className="text-pubnub-white ml-1">{flagCount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlaggedUserCard;
