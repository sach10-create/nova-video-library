import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { historyReducer } from "../reducers";
import { getHistoryDataHandler } from "../utils";

const defaultHistoryState = {
  historyItemsCount: 0,
  itemsInHistory: [],
};

const HistoryContext = createContext(defaultHistoryState);

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    defaultHistoryState
  );

  const token = localStorage.getItem("token");
  useEffect(() => token?.length && getHistoryDataHandler(token, historyDispatch), []);
  return (
    <HistoryContext.Provider
      value={{
        historyState,
        historyDispatch,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { useHistory, HistoryProvider };
