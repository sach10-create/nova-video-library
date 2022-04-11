import axios from "axios";
import { formatDateTime } from "./date";
/**
 * Add video data to history
 * @param {*} element
 * @param {Object} videoData video to be added in history
 * @param {string} token encodedToken of user
 * @param {function} historyDispatch Reducer function
 */
const addToHistoryHandler = (videoId, historyDispatch ,token) => {
  (async () => {
    try {
		
      const response = await axios.post(
        `/api/user/history`,
        {
          videoId: videoId,
        },
        {
          headers: {
            Accept: "*/*",
            authorization: token
          },
        }
      );
      console.log(response);
      historyDispatch({
        type: "ADD_ITEM",
        payload: {
          historyItemsCount: response.data.history.length,
          itemsInHistory: {
            videoId: videoId,
            updatedAt: formatDateTime(),
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

/**
 * Remove data from history
 * @param element
 * @param {string} videoId videoId to remove from history
 * @param {string} token encodedToken of user
 * @param {function} historyDispatch Reducer function
 */
const removeFromHistoryHandler = (e, videoId, historyDispatch , token) => {
  e.preventDefault();
  (async () => {
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          Accept: "*/*",
          authorization: token,
        },
      });
      console.log(response);
      historyDispatch({
        type: "REMOVE_ITEM",
        payload: {
          historyItemsCount: response.data.history.length,
          itemsInHistory: videoId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

/**
 * Remove data fre.preventDefault();om history
 * @param element
 * @param {string} videoId videoId to remove from history
 * @param {string} token encodedToken of user
 * @param {function} historyDispatch Reducer function
 */
const removeAllFromHistoryHandler = (e, historyDispatch , token) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          Accept: "*/*",
          authorization: JSON.parse(localStorage.getItem("user"))?.token,
        },
      });
      historyDispatch({
        type: "REMOVE_ALL",
        payload: {
          historyItemsCount: 0,
          itemsInHistory: [],
		        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

/**
 * Retrieve history data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} historyDispatch Reducer function
 */
const getHistoryDataHandler = (historyDispatch , token) => {
  (async () => {
    try {
      const response = await axios.get(`/api/user/history`, {
        headers: {
          Accept: "*/*",
          authorization: JSON.parse(localStorage.getItem("user"))?.token,
        },
      });
      historyDispatch({
        type: "GET_ITEM",
        payload: {
          itemsInHistory: response.data.history,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

export {
  addToHistoryHandler,
  removeFromHistoryHandler,
  getHistoryDataHandler,
  removeAllFromHistoryHandler,
};
