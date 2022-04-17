import { removeObjFromArray } from "../utils";
/**
 * Reducer function to handle history state
 * @param {Object} historyState State values of history
 * @param {*} historyAction The changed state
 * @returns Updated state into historyState
 */
const historyReducer = (historyState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...historyState,
				historyItemsCount: payload.historyItemsCount,
				itemsInHistory: [
					...historyState.itemsInHistory,
					{ ...payload.itemsInHistory },
				],

			};

		case "REMOVE_ITEM":
			return {
				...historyState,
				historyItemsCount: payload.historyItemsCount,
				itemsInHistory: removeObjFromArray(
					historyState.itemsInHistory,
					payload.itemsInHistory
				)
			};

		case "REMOVE_ALL":
			return {
				...historyState,
				historyItemsCount: payload.historyItemsCount,
				itemsInHistory: [],
			};
		default:
			return historyState;
	}
};

export { historyReducer };