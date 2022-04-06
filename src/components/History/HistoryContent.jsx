import { VideoHorizontalCard } from "../Playlist/VideoHorizontalCard";
import { useVideos, useHistory } from "../../context";
import {
  getDataFromId,
  removeFromHistoryHandler,
  removeAllFromHistoryHandler,
} from "../../utils";
const HistoryContent = () => {
  const { historyState, historyDispatch, pauseHistory, setPauseHistory } =
    useHistory();
  const { videosData } = useVideos();
  const videos = getDataFromId(historyState.itemsInHistory, videosData);
  const itemCount = videos.length;
  const handleDeleteFromHistory = (e, videoId) =>
    removeFromHistoryHandler(e, videoId, historyDispatch);
  const handleClearAllHistory = (e) =>
    removeAllFromHistoryHandler(e, historyDispatch);
  const handlePauseHistory = () =>
    pauseHistory ? setPauseHistory(false) : setPauseHistory(true);
  return (
    <main className="main">
      <div className="flex-row flex-wrap flex-gap-2 m-5">
        <div className="flex-column flex-gap-2">
          <div className="cursor-pointer card card-shadow p-5 b-radius-2 h-auto">
            <section className="flex-row justify-content-start align-start">
              <img
                src={
                  videos.length
                    ? videos[0].thumbnailURL
                    : "https://i.ytimg.com/img/no_thumbnail.jpg"
                }
                alt="Playlists"
                className="details-card-img b-radius-2"
              />
            </section>
          </div>
          <div className="flex-row justify-content-space-between align-center">
            <h2 className="px-5 text-bold">Watch History</h2>
            <h3 className="px-5">
              {itemCount} {`${itemCount < 2 ? "Video" : "Videos"}`}
            </h3>
          </div>

          <div className="flex-row align-center w-100">
            <button
              className="primary-btn p-5 b-radius-2 mx-5 my-0 
text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer"
              onClick={handleClearAllHistory}
            >
              <span>
                <i className="fa-solid fa-trash"></i>
              </span>
              <p className="btn-text">Clear History</p>
            </button>
            {!pauseHistory ? (
              <button
                className="primary-btn p-5 b-radius-2 mx-5 my-0 
							text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer"
                onClick={handlePauseHistory}
              >
                <span>
                  <i className="fa-solid fa-circle-pause"></i>
                </span>
                <p className="btn-text">Pause History</p>
              </button>
            ) : (
              <button
                className="primary-btn p-5 b-radius-2 mx-5 my-0 
						text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 flex-grow-1 cursor-pointer"
                onClick={handlePauseHistory}
              >
                <span>
                  <i className="fa-solid fa-circle-play"></i>
                </span>
                <p className="btn-text">Resume History</p>
              </button>
            )}
          </div>
        </div>

        <VideoHorizontalCard
          itemCount={itemCount}
          videos={videos}
          handleDelete={handleDeleteFromHistory}
        />
      </div>
    </main>
  );
};

export { HistoryContent };
