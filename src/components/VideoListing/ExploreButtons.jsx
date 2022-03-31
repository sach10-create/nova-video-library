import {
  addTowatchlaterHandler,
  removeFromwatchlaterHandler,
} from "../../utils";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../context";

const WatchLaterButton = (props) => {
  const { watchLaterDispatch } = useWatchLater();
  return (
    <>
      {props.btnType === "add" && (
        <div
          onClick={(e) =>
            addTowatchlaterHandler(
              e,
              props.videoData,
              props.token,
              watchLaterDispatch
            )
          }
          className="watch-later-icon d-flex align-center justify-content-center"
        >
          <svg width="2.5rem" height="2.5rem" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
            ></path>
            <path
              fill="currentColor"
              d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
            ></path>
          </svg>
        </div>
      )}
      {props.btnType === "remove" && (
        <div
          onClick={(e) =>
            removeFromwatchlaterHandler(
              e,
              props.videoData,
              props.token,
              watchLaterDispatch
            )
          }
          className="watch-later-icon d-flex align-center justify-content-center"
        >
          <svg width="2.5rem" height="2.5rem" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
            ></path>
            <path
              fill="currentColor"
              d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
            ></path>
          </svg>
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
            addTowatchlaterHandler(
              e,
              props.videoData,
              props.token,
              watchLaterDispatch
            )
          }  className="watch-later-icon d-flex align-center justify-content-center">
            <svg width="2.5rem" height="2.5rem" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
              ></path>
              <path
                fill="currentColor"
                d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
              ></path>
            </svg>
          </div>
        </Link>
      )}
    </>
  );
};

export { WatchLaterButton };
