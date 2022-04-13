import { useAuth, useWatchLater } from "../../context";
import { VideoHorizontalCard } from "../Playlist/VideoHorizontalCard";
import { removeFromwatchlaterHandler } from "../../utils";

const MainWatchLater = () => {
  const { authState } = useAuth();
  const { watchLaterState  , watchLaterDispatch} = useWatchLater();

  const handleDeleteFromWatchLater = (e, videoId) =>
    removeFromwatchlaterHandler(
      e,
      videoId,
      authState.token,
      watchLaterDispatch
    );
  const itemCount = watchLaterState.watchLaterItemsCount;

  return (
    <VideoHorizontalCard
      itemCount={itemCount}
      videos={watchLaterState.watchLaterData}
      handleDelete={handleDeleteFromWatchLater}
    />
  );
};
export { MainWatchLater };
