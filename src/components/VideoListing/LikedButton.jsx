import {
  addTolikedVideosHandler,
  removeFromLikedVideosHandler,
} from "../../utils";
import { Link } from "react-router-dom";
import { useLikedVideos } from "../../context";

const LikedVideosButton = (props) => {
  const { likedVideosDispatch } = useLikedVideos();
  return (
    <>
      {props.btnType === "add" && (
        <div
          onClick={(e) =>
            addTolikedVideosHandler(
              e,
              props.videoData,
              props.token,
              likedVideosDispatch
            )
          }
          className="liked-videos-icon d-flex align-center justify-content-center"
        >
         <i className="fa-solid fa-heart"></i>
        </div>
      )}
      {props.btnType === "remove" && (
        <div
          onClick={(e) =>
            removeFromLikedVideosHandler(
              e,
              props.videoData,
              props.token,
              likedVideosDispatch
            )
          }
          className="liked-videos-icon d-flex align-center justify-content-center"
        >
<i className="fa-solid fa-heart"></i>
        </div>
      )}
      {props.btnType === "redirect" && (
        <Link
          to="/auth"

          state={{ state: "/explore" }}

          className="no-link-decoration cursor-pointer outline-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
        >
          <div
            onClick={(e) =>
              addTolikedVideosHandler(
                e,
                props.videoData,
                props.token,
                likedVideosDispatch
              )
            }
            className="liked-videos-icon d-flex align-center justify-content-center"
          >
<i className="fa-solid fa-heart"></i>
          </div>
        </Link>
      )}
    </>
  );
};

export { LikedVideosButton };
