import {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react/cjs/react.production.min";
import { getVideosDatahook } from "../custom-hooks/getVideosData";
import { videosReducer , sortByReducer } from "../reducers";

const getdefaultVideoState = (categoriesData) => {
  return {
    categoryType: "All",
    categoryName: "",
    categoryFilters: categoriesData.categories.reduce((prev, curr) => {
      prev[curr.name] = false;
      return prev;
    }, {}),
  };
};

const VideosContext = createContext({});

const VideoProvider = ({ children }) => {
  const videosData = getVideosDatahook();
  const categoriesData = useCategoriesDataHook();

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
        filtersData: filtersData,
        videosDispatch,
        clearFilters: defaultVideoState,
      }}
    >
      {children}{" "}
    </VideosContext.Provider>
  );
};
export {VideoProvider};