import { useAuth, useLikedVideos } from "../../context";
import { Link } from "react-router-dom";
import { VideoHorizontalCard } from "../Playlist/VideoHorizontalCard";
import { removeFromLikedVideosHandler } from "../../utils";

const MainLikedVideos = () => {
  const { authState } = useAuth();
  const { likedVideosState , likedVideosDispatch } = useLikedVideos();

  const handleDeleteFromWatchLater = (e, videoId) =>
  removeFromLikedVideosHandler(
    e,
    videoId,
    authState.token,
    likedVideosDispatch
  );
const itemCount = likedVideosState.likedVideosItemsCount;

  return (
    <VideoHorizontalCard
    itemCount={itemCount}
    videos={likedVideosState.likedVideosData}
    handleDelete={handleDeleteFromWatchLater}
  />
  );
};

export { MainLikedVideos };
