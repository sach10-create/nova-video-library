import { useVideos, useHistory, useAuth } from "../../context";
import { WatchLaterButton } from "../VideoListing";
import { VideoHorizontalCard } from "../Playlist/VideoHorizontalCard";
import {
  getDataFromId,
  removeFromHistoryHandler,
  removeAllFromHistoryHandler,
} from "../../utils";
import { Link } from "react-router-dom";

const HistoryContent = () => {
  const { historyState, historyDispatch } = useHistory();
  const { videosData } = useVideos();
  const { authState} = useAuth();
  const videos = getDataFromId(historyState.itemsInHistory, videosData);
  const itemCount = videos.length;

  const handleDeleteFromHistory = (e, videoId) =>
    removeFromHistoryHandler(e, videoId, historyDispatch , authState.token);

  const handleClearAllHistory = (e) =>
    removeAllFromHistoryHandler(e, historyDispatch);
  return (
    <VideoHorizontalCard
    itemCount={itemCount}
    videos={videos}
    handleDelete={handleDeleteFromHistory}
  />
  );
};

export { HistoryContent };
