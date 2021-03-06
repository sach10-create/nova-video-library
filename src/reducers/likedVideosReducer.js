import { removeFromArray, removeObjFromArray } from "../utils";
/**
 * Reducer function to handle likedVideos state
 * @param {Object} likedVideosState State values of likedVideos
 * @param {*} likedVideosAction The changed state
 * @returns Updated state into likedVideosState
 */
const likedVideosReducer = (likedVideosState, likedVideosAction) => {
    switch (likedVideosAction.type) {
        case "ADD_ITEM":
            return {
                ...likedVideosState,
                likedVideosItemsCount: likedVideosAction.likedVideosItemsCount,
                itemsInLikedVideos: [
                    ...likedVideosState.itemsInLikedVideos,
                    ...likedVideosAction.itemsInLikedVideos,
                ],
                likedVideosData: [
                    ...likedVideosState.likedVideosData,
                    likedVideosAction.likedVideosData,
                ],
            };

        case "REMOVE_ITEM":
            return {
                ...likedVideosState,
                likedVideosItemsCount: payload.likedVideosItemsCount,
                itemsInLikedVideos: removeFromArray(
                    likedVideosState.itemsInLikedVideos,
                    payload.itemsInLikedVideos[0]
                ),
                likedVideosData: removeObjFromArray(
                    likedVideosState.likedVideosData,
                    likedVideosAction.likedVideosData
                ),
            };
            case "RESET":
                return {
                    ...likedVideosState,
                    likedVideosItemsCount: 0,
                    itemsInLikedVideos: [],
                };
        default:
            return likedVideosState;
    }
};

export { likedVideosReducer };