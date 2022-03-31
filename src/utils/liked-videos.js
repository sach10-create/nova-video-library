
import axios from "axios";
import { presentObjInArray } from "./";
import { removeFromCartHandler } from "./";
/**
 * Add video data to watchlater
 * @param {*} element
 * @param {Object} videoData video to be added in watchlater
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const addTolikedVideosHandler = (
	element,
	videoData,
	token,
	watchLaterDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/watchlater`, videoData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			console.log(response);
			watchLaterDispatch({
				type: "ADD_ITEM",
				watchlaterItemsCount: response.data.watchlater.length,
				itemsInwatchlater: [videoData.video._id],
				watchlaterData: videoData.video,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from watchlater
 * @param element
 * @param {string} videoId videoId to remove from watchlater
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const removeFromwatchlaterHandler = (
	element,
	videoId,
	token,
	watchLaterDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			watchLaterDispatch({
				type: "REMOVE_ITEM",
				watchlaterItemsCount: response.data.watchlater.length,
				itemsInwatchlater: [videoId],
				watchLaterData: videoId,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve watchlater data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} watchlaterDispatch Reducer function
 */
const getlikedVideosDataHandler = (token, likedVideosDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/liked`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			likedVideosDispatch({
				type: "GET_ITEM",
				likedVideosData: response.data.watchlater,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addTowatchlaterHandler,
	removeFromwatchlaterHandler,
	getwatchlaterDataHandler,
};