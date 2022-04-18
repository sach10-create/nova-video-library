import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { playlistReducer } from "../reducers";
import { getPlaylistDataHandler } from "../utils";
const defaultplaylistContext = {
  playlists: [],
  newPlaylist :"",
  selectedVideoId : "",
};

const PlaylistContext = createContext(defaultplaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    defaultplaylistContext
  );
  const token = localStorage.getItem("token");
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  useEffect(() =>token?.length && getPlaylistDataHandler(token, playlistDispatch), []);
  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        playlistDispatch,
        showPlaylistModal,
        setShowPlaylistModal,
        showCreatePlaylist,
        setShowCreatePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
