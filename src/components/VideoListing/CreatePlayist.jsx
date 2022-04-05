import { usePlaylist, useAuth } from "../../context";
import { addToNewPlaylistHandler } from "../../utils";

const CreatePlaylist = () => {
  const { authState } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const handleValueChange = (e) => {
    playlistDispatch({
      type: "NEW_PLAYLIST_VALUE",
      payload: {
        newPlaylist: e.target.value,
      },
    });
  };

  const CreatePlaylistSubmitHandler = (e) => {
    if (playlistState.newPlaylist.length) {
      addToNewPlaylistHandler(
        e,
        authState.token,
        playlistState.newPlaylist,
        playlistDispatch
      );
    }
  };

  return (
    <div className="d-flex flex-column align-center justify-content-center">
      <section key="new-playlist-input">
        <input
          type="text"
          id="new-playlist"
          name="newPlaylist"
          onChange={handleValueChange}
          value={playlistState.newPlaylist}
        />
      </section>

      <button className="btn btn-primary" onClick={CreatePlaylistSubmitHandler}>
        {" "}
        Create{" "}
      </button>
    </div>
  );
};

export { CreatePlaylist };
