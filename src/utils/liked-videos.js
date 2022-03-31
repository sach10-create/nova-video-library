
import axios from "axios";
import { presentObjInArray } from "./";
import { removeFromCartHandler } from "./";
/**
 * Add video data to likedvideos
 * @param {*} element
 * @param {Object} videoData video to be added in likedvideos
 * @param {string} token encodedToken of user
 * @param {function} likedVideosDispatch Reducer function
 */
const addTolikedVideosHandler = (
	element,
	videoData,
	token,
	likedVideosDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/likes`, videoData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			console.log(response);
			likedVideosDispatch({
				type: "ADD_ITEM",
				likedVideosItemsCount: response.data.likes.length,
				itemsInLikedVideos: [videoData.video._id],
				likedVideosData: videoData.video,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from liked videos
 * @param element
 * @param {string} videoId videoId to remove from likedVideos
 * @param {string} token encodedToken of user
 * @param {function} likedVideosDispatch Reducer function
 */
const removeFromLikedVideosHandler = (
	element,
	videoId,
	token,
	likedVideosDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/likes/${videoId}`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});

			console.log(response);
			likedVideosDispatch({
				type: "REMOVE_ITEM",
				likedVideosItemsCount: response.data.likes.length,
				itemsInLikedVideos: [videoId],
				likedVideosData: videoId,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve likedVideos data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} likedVideosDispatch Reducer function
 */
const getlikedVideosDataHandler = (token, likedVideosDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/likes`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			likedVideosDispatch({
				type: "GET_ITEM",
				likedVideosData: response.data.likes,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addTolikedVideosHandler,
	removeFromLikedVideosHandler,
	getlikedVideosDataHandler,
};