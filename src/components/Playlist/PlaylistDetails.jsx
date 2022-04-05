import { useParams, Navigate } from "react-router-dom";
import { useAuth, usePlaylist, useVideos } from "../../context";
import {
  getDataFromPlaylist,
  getVideosFromPlaylist,
  removeVideoFromPlaylistHandler,
  removePlaylistHandler,
} from "../../utils";
import { VideoHorizontalCard } from "./VideoHorizontalCard";
import { Header, Navbar, Footer } from "../index";
import { PlaylistListing } from "./PlaylistListing";

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { videosData } = useVideos();
  const { authState } = useAuth();

  const playlist = playlistState.playlists.find(
    (playlist) => playlist._id === playlistId
  );

  const playlistData =
    playlist && getDataFromPlaylist(playlistState.playlists, playlistId);
  const videos =
    playlist && getVideosFromPlaylist(playlistData.videos, videosData);
  const handleDeleteVideoFromPlaylist = (e, videoId) =>
    removeVideoFromPlaylistHandler(
      e,
      playlistId,
      videoId,
      authState.token,
      playlistDispatch
    );

  const itemCount = playlist && playlistData.videos.length;

  const handleDeletePlaylist = (e) =>
    removePlaylistHandler(e, playlistId, authState.token, playlistDispatch);

  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <div className="main-comp">
        {playlist ? (
          <div className="d-flex play">
            <div>
              <img
                src={
                  videos.length
                    ? videos[0].thumbnailURL
                    : "https://i.ytimg.com/img/no_thumbnail.jpg"
                }
                alt="Playlists"
                className="horizontal-card-img"
              />
              <div>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={handleDeletePlaylist}
                ></i>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <div>
              <VideoHorizontalCard
                itemCount={itemCount}
                videos={videos}
                handleDelete={handleDeleteVideoFromPlaylist}
              />
            </div>
          </div>
        ) : (
          <Navigate
            replace
            to="/playlist"
            element={<PlaylistListing />}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export { PlaylistDetails };
