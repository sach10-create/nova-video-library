
import { createContext, useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { likedVideosReducer } from "../reducers";
import { getlikedVideosDataHandler } from "../utils";
const defaultLikedVideosContext = {
    type: "",
    likedVideosItemsCount: 0,
    itemsInLikedVideos: [],
    likedVideosData: [],
};

const LikedVideosContext = createContext(defaultLikedVideosContext);

const LikedVideosProvider = ({ children }) => {
    const [likedVideosState, likedVideosDispatch] = useReducer(
        likedVideosReducer,
        defaultLikedVideosContext
    );
    const token = localStorage.getItem("token");
    useEffect(() => token?.length && getlikedVideosDataHandler(token, likedVideosDispatch), []);
    return (
        <LikedVideosContext.Provider
            value={{
                likedVideosState,
                likedVideosDispatch,
            }}
        >
            {children}
        </LikedVideosContext.Provider>
    );
};

const useLikedVideos = () => useContext(LikedVideosContext);
export { useLikedVideos, LikedVideosProvider };