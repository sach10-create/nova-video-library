import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { watchlaterReducer } from "../reducers";
import { getwatchlaterDataHandler } from "../utils";
const defaultWatchLaterContext = {
  type: "",
  watchLaterItemsCount: 0,
  itemsInWatchLater: [],
  watchLaterData: [],
};

const WatchLaterContext = createContext(defaultWatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchlaterReducer,
    defaultWatchLaterContext
  );
  const token = localStorage.getItem("token");
  useEffect(() =>token?.length && getwatchlaterDataHandler(token, watchLaterDispatch), []);
  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterState,
        watchLaterDispatch,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };
