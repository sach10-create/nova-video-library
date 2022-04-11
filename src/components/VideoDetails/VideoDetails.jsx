import { useParams } from "react-router-dom";
import { useAuth, useHistory } from "../../context";
import {
  presentObjInArray,
  removeFromHistoryHandler,
  addToHistoryHandler,
} from "../../utils";

import { useEffect } from "react";

const VideoDetails = () => {
  const { authState } = useAuth();
  const { historyDispatch, historyState } = useHistory();
  const { videoId } = useParams();
  //   const video = getDataFromId([{ _id: videoId }], videosData)[0];
  useEffect(() => {
    if (authState.token?.length) {
      if (presentObjInArray(historyState.itemsInHistory, videoId)) {
        removeFromHistoryHandler(videoId, historyDispatch , authState.token);
        addToHistoryHandler(videoId, historyDispatch,authState.token);
      } else {
        addToHistoryHandler(videoId, historyDispatch , authState.token);
      }
    }
  }, []);

  return <h1> Video Page</h1>;
};

export { VideoDetails };
