
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
const addTowatchlaterHandler = (
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
const getwatchlaterDataHandler = (token, watchLaterDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/watchlater`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			watchLaterDispatch({
				type: "GET_ITEM",
				watchlaterData: response.data.watchlater,
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