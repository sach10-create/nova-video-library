import axios from "axios";
import { useEffect , useState} from "react";

const getVideosDatahook = () => {
  const [videosData, setvideosData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/videos`);
        setvideosData(response.json().videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return videosData;
};

export { getVideosDatahook };
