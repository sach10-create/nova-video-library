import { removeFromArray, removeObjFromArray } from "../utils";
/**
 * Reducer function to handle watchlater state
 * @param {Object} likedVideosState State values of watchlater
 * @param {*} watchlaterAction The changed state
 * @returns Updated state into watchlaterState
 */
const likedVideosReducer = (likedVideosState, likedVideosAction) => {
    switch (likedVideosAction.type) {
        case "ADD_ITEM":
            return {
                ...likedVideosState,
                watchLaterItemsCount: likedVideosAction.watchlaterItemsCount,
                itemsInWatchLater: [
                    ...likedVideosState.itemsInWatchLater,
                    ...likedVideosAction.itemsInwatchlater,
                ],
                likedVideoData: [
                    ...likedVideosState.likedVideoData,
                    likedVideosAction.likedVideoData,
                ],
            };

        case "REMOVE_ITEM":
            return {
                ...likedVideosState,
                watchLaterItemsCount: watchlaterAction.watchlaterItemsCount,
                itemsInWatchLater: removeFromArray(
                    likedVideosState.itemsInWatchLater,
                    likedVideosAction.itemsInwatchlater[0]
                ),
                likedVideoData: removeObjFromArray(
                    likedVideosState.likedVideoData,
                    likedVideosAction.likedVideoData
                ),
            };
        default:
            return likedVideosState;
    }
};

export { likedVideosReducer };