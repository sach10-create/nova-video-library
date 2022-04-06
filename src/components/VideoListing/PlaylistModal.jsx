import { useAuth, usePlaylist } from "../../context";
import { CreatePlaylist } from "./CreatePlayist";
import { AddPlaylistBtn } from "./AddPlaylistBtn";
import { addVideoToPlaylistHandler } from "../../utils"
const PlaylistModal = () => {
  const {
    playlistState,
    showCreatePlaylist,
    setShowCreatePlaylist,
    setShowPlaylistModal,
    playlistDispatch,
  } = usePlaylist();

  const { authState } = useAuth();
  const handlePlaylistModal = () => {
    setShowCreatePlaylist(false);
    setShowPlaylistModal(false);
  };

  const videoHandler = (e, playlistId, videoId) =>
    addVideoToPlaylistHandler(
      e,
      authState.token,
      videoId,
      playlistId,
      playlistDispatch
    );
  return (
    <div className="modal-container d-flex align-center justify-content-center">
      <div className="modal-bg"></div>
      <div className="modal-content">
        <ul className = "no-list">
          <li
            className="profile-header flex-row justify-content-center align-center flex-wrap"
            key="address-header"
          >
            <h4 className="form-heading text-bold">Playlists</h4>
            <i
              className="far fa-times-circle video-modal-dismiss"
              onClick={handlePlaylistModal}
            ></i>
          </li>
          {playlistState.playlists.map(({ name, _id }) => (
            <ul className="checkbox-btn-container no-list">
              <li className="no-list">
                <label htmlFor="playlist" className="video-check">
                  <input
                    id="playlist"
                    type="checkbox"
                    className = "video-check"
                    value={name}
                    onChange={(e) =>
                      videoHandler(e, _id, playlistState.selectedVideoId)
                    }
                  />
                  {name}
                </label>
              </li>
            </ul>
          ))}
        </ul>
        {showCreatePlaylist && (
          <li key="create-playlist" className="no-list">
            <CreatePlaylist />
          </li>
        )}
        {!showCreatePlaylist && (
          <li
            key="add-playlist-btn"
            className="no-list "
          >
            <AddPlaylistBtn />
          </li>
        )}
      </div>
    </div>
  );
};

export { PlaylistModal };
