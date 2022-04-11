import {
  useVideos,
  useAuth,
  useWatchLater,
  useLikedVideos,
  usePlaylist,
  useHistory
} from "../../context";
import { Link } from "react-router-dom";
import { presentInArray } from "../../utils";
import { WatchLaterButton } from "./ExploreButtons";
import { LikedVideosButton } from "./LikedButton";
import { PlaylistButton, PlaylistModal } from "./PlaylistModal";

const MainVideoListing = () => {
  const { videosData, videoId } = useVideos();
  const { authState } = useAuth();
  const { watchLaterState } = useWatchLater();
  const { historyDispatch} = useHistory();

  const { likedVideosState } = useLikedVideos();

  const { showPlaylistModal, setShowPlaylistModal, playlistDispatch } =
    usePlaylist();
  const handleShowPlaylist = (videoId) => {
    setShowPlaylistModal(true);
    playlistDispatch({
      type: "UPDATE_SELECTED_VIDEO_ID",
      payload: {
        selectedVideoId: videoId,
      },
    });
  };



  return (
    <div className="main-comp-video">
      {videosData.length !== 0 ? (
        videosData.map(
          ({
            _id,
            title,
            views,
            channelName,
            subscribers,
            verified,
            likes,
            duration,
            category,
            profileURL,
            description,
            thumbnailURL,
            videoURL,
          }) => (
            <div className="video-card-container" key={_id}>
              <Link to={`/video/${_id}`} className="video-card-image-container">
                <img src={thumbnailURL} className="video-card-image" />
              </Link>
              <div className="details-container d-flex ">
                <div className="thumbnail-container">
                  <div className="profile-avatar">
                    <img
                      src={profileURL}
                      alt="avatar"
                      className="avatar s-img"
                    />
                  </div>
                </div>
                <div className="details">
                  <h6 className="">{title}</h6>

                  <div className="channel d-flex align-center">
                    <h6>
                      {" "}
                      {channelName}
                      {verified && <i className="fa-solid fa-circle-check"></i>}
                    </h6>
                  </div>
                  <div
                    className="ratings d-flex
                            align-center"
                  >
                    <p>
                      {" "}
                      {views > 1000
                        ? views > 1000000
                          ? views / 1000000 + "M"
                          : views / 1000 + "K"
                        : views}{" "}
                      views
                    </p>
                    <i className="fa-solid fa-circle"></i>
                    <p>
                      {" "}
                      {likes > 1000
                        ? likes > 1000000
                          ? likes / 1000000 + "M"
                          : likes / 1000 + "K"
                        : likes}{" "}
                      likes
                    </p>
                  </div>
                </div>
              </div>
              {authState.token !== null ? (
                presentInArray(watchLaterState.itemsInWatchLater, _id) ? (
                  <WatchLaterButton
                    btnType="remove"
                    videoId={_id}
                    token={authState.token}
                  />
                ) : (
                  <WatchLaterButton
                    btnType="add"
                    videoData={{
                      video: {
                        _id,
                        title,
                        channelName,
                        subscribers,
                        verified,
                        views,
                        duration,
                        likes,
                        description,
                        profileURL,
                        thumbnailURL,
                        videoURL,
                      },
                    }}
                    token={authState.token}
                  />
                )
              ) : (
                <WatchLaterButton btnType="redirect" />
              )}

              {authState.token !== null ? (
                presentInArray(likedVideosState.itemsInLikedVideos, _id) ? (
                  <LikedVideosButton
                    btnType="remove"
                    videoId={_id}
                    token={authState.token}
                  />
                ) : (
                  <LikedVideosButton
                    btnType="add"
                    videoData={{
                      video: {
                        _id,
                        title,
                        channelName,
                        subscribers,
                        verified,
                        views,
                        duration,
                        likes,
                        description,
                        profileURL,
                        thumbnailURL,
                        videoURL,
                      },
                    }}
                    token={authState.token}
                  />
                )
              ) : (
                <LikedVideosButton btnType="redirect" />
              )}
              <div onClick={() => handleShowPlaylist(_id)}>
                <i className="playlist-icon cursor-pointer fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          )
        )
      ) : (
        <h1>Loading</h1>
      )}
      {showPlaylistModal && <PlaylistModal />}
    </div>
  );
};

export { MainVideoListing };
