import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getVideosDatahook } from "../custom-hooks/getVideosData";
import { getCategoriesDatahook } from "../custom-hooks";
import { videosReducer , sortByReducer } from "../reducers";
import { VideoCompose } from "../utils";
import { CategoryVideos } from "../utils";

const getdefaultVideoState = (categoriesData) => {
  return {
    categoryType: "All",
    categoryName: "",
    categoryFilters: categoriesData.reduce((prev, curr) => {
      prev[curr.categoryName] = false;
      return prev;
    }, {}),
  };
};

const VideosContext = createContext({});

const VideoProvider = ({ children }) => {
  const videosData = getVideosDatahook();
  const categoriesData = getCategoriesDatahook();

  const [defaultVideoState, setdefaultVideoState] = useState({});
  useEffect(() => {
    if (categoriesData.length !== 0 && videosData.length !== 0) {
      setdefaultVideoState(getdefaultVideoState(categoriesData));
    }
  }, [categoriesData]);

  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    defaultVideoState
  );

  useEffect(() => {
    if (Object.keys(defaultVideoState).length !== 0) {
      videosDispatch({ ...defaultVideoState });
    }
  }, [defaultVideoState]);

  const [filteredVideosData, setFiltersVideoData] = useState(videosData);
  useEffect(() => {
    if (videosData.length !== 0 && Object.keys(videosState).length !== 0) {
      setFiltersVideoData(
        VideoCompose(videosState, CategoryVideos , sortByReducer)(videosData)
      );
    }
  }, [videosData, videosState]);

  return (
    <VideosContext.Provider
      value={{
        videosState,
        videosData: filteredVideosData,
        categoriesData: categoriesData,
        videosDispatch
      }}
    >
      {children}{" "}
    </VideosContext.Provider>
  );

};

const useVideos = () => useContext(VideosContext);

export {VideoProvider , useVideos};