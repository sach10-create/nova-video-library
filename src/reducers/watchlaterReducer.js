import { removeFromArray, removeObjFromArray } from "../utils";
/**
 * Reducer function to handle watchlater state
 * @param {Object} watchlaterState State values of watchlater
 * @param {*} watchlaterAction The changed state
 * @returns Updated state into watchlaterState
 */
const watchlaterReducer = (watchLaterState, watchlaterAction) => {
  switch (watchlaterAction.type) {
    case "ADD_ITEM":
      return {
        ...watchLaterState,
        watchLaterItemsCount: watchlaterAction.watchlaterItemsCount,
        itemsInWatchLater: [
          ...watchLaterState.itemsInWatchLater,
          ...watchlaterAction.itemsInwatchlater,
        ],
        watchLaterData: [
          ...watchLaterState.watchLaterData,
          watchlaterAction.watchlaterData,
        ],
      };

    case "REMOVE_ITEM":
      return {
        ...watchLaterState,
        watchLaterItemsCount: watchlaterAction.watchlaterItemsCount,
        itemsInWatchLater: removeFromArray(
          watchLaterState.itemsInWatchLater,
          watchlaterAction.itemsInwatchlater[0]
        ),
        watchLaterData: removeObjFromArray(
          watchLaterState.watchLaterData,
          watchlaterAction.watchLaterData
        ),
      };
    case "RESET":
      return {
        ...watchLaterState,
        watchlaterItemsCount: 0,
        itemsInWatchlater: [],
      };
    default:
      return watchLaterState;
  }
};

export { watchlaterReducer };
