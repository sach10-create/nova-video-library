import axios from "axios";

/**
 * Add video data to playlist
 * @param {*} element
 * @param {Object} videoData video to be added in playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const addToNewPlaylistHandler = (
  element,
  token,
  playlistName,
  playlistDispatch
) => {
  element.preventDefault();
  (async () => {
    try {
      const response = await axios.post(
        `/api/user/playlists`,
        {
          playlist: {
            name: playlistName,
          },
        },
        {
          headers: {
            Accept: "*/*",
            authorization: token,
          },
        }
      );

      console.log(response);
      playlistDispatch({
        type: "ADD_PLAYLIST",
        payload: {
          playlists: response.data.playlists.slice(-1),
        },
      });

      playlistDispatch({
        type: "NEW_PLAYLIST_VALUE",
        payload: {
          newPlaylist: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

/**
 * Remove data from playlist
 * @param element
 * @param {string} playlistId videoId to remove from playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const removePlaylistHandler = (
  element,
  playlistId,
  token,
  playlistDispatch
) => {
  element.preventDefault();
  (async () => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          Accept: "*/*",
          authorization: token,
        },
      });
      playlistDispatch({
        type: "REMOVE_PLAYLIST",
        payload: {
          playlists: response.data.playlists,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

/**
 * Retrieve playlist data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const getPlaylistDataHandler = (token , playlistDispatch) => {
  (async () => {
    try {
      const response = await axios.get(`/api/user/playlists`, {
        headers: {
          Accept: "*/*",
          authorization: token,
        },
      });
      playlistDispatch({
        type: "GET_PLAYLIST",
        payload: {
          playlists: response.data.playlists,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};


/**
 * Add video data to playlist
 * @param {*} element
 * @param {Object} videoData video to be added in playlist
 * @param {string} token encodedToken of user
 * @param {function} playlistDispatch Reducer function
 */
const addVideoToPlaylistHandler = (
  element,
  token,
  videoId,
  playlistId,
  playlistDispatch
) => {
  console.log("Here" , playlistId , videoId , token)
  element.preventDefault();
  (async () => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video: {
            _id: videoId,
          },
        },
        {
          headers: {
            Accept: "*/*",
            authorization: token,
          },
        }
      );

      console.log(response);
      playlistDispatch({
        type: "ADD_NEW_VIDEO",
        payload: {
          playlists: response.data.playlist,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

const removeVideoFromPlaylistHandler = (
  element,
  playlistId,
  videoId,
  token,
  playlistDispatch
) => {
  element.preventDefault();
  (async () => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            Accept: "*/*",
            authorization: token,
          },
        }
      );
        console.log(response)
      playlistDispatch({
        type: "DELETE_VIDEO",
        payload: {
          playlists: response.data.playlist,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};



export {
  addToNewPlaylistHandler,
  removePlaylistHandler,
  getPlaylistDataHandler,
  addVideoToPlaylistHandler,
  removeVideoFromPlaylistHandler
};