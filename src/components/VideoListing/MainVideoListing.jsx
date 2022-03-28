import { useVideos, useAuth } from "../../context";
import { Link } from "react-router-dom";

const MainVideoListing = () => {
  const { videosData } = useVideos();
  const { authState } = useAuth();

  return (
    <div className="main-comp">
    <div className="video-listing-container d-flex flex-wrap">
    <div className="video-card-container">
      {videosData.length !== 0 ? (
        videosData.map(
          ({
            _id,
            title,
            views,
            channelName,
            subscribers,
            verified,
            likes,
            category,
            profileURL,
            thumbnailURL,
          }) => (
            <div key={_id}>
              <Link to='{videos/${_id}}' className="video-card-image-container">
                <img src={thumbnailURL} className="video-card-image" />
              </Link>
              <div className="details-container d-flex ">
                <div className="thumbnail-container">
                  <div className="profile-avatar">
                    <img
                      src={profileURL}
                      alt="avatar"
                      className="avatar s-img"
                    />
                  </div>
                </div>
                <div className="details">
                  <h6 className="">{title}</h6>

                  <div className="channel d-flex align-center">
                    <h6> {channelName}{verified && <i className="fa-solid fa-circle-check"></i>}</h6>
                    
                  </div>
                  <div
                    className="ratings d-flex
                            align-center"
                  >
                    <p>
                      {" "}
                      {views > 1000
                        ? views > 1000000
                          ? views / 1000000 + "M"
                          : views / 1000 + "K"
                        : views}{" "}
                      views
                    </p>
                    <i className="fa-solid fa-circle"></i>
                    <p>
                      {" "}
                      {likes > 1000
                        ? likes > 1000000
                          ? likes / 1000000 + "M"
                          : likes / 1000 + "K"
                        : likes}{" "}
                      likes
                    </p>
                  </div>
                </div>
              </div>
              <div className="watch-later-icon d-flex align-center justify-content-center">
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
            </div>
          )
        )
      ) : (
        <h1>sadsa</h1>
      )}
    </div>
    </div>
    </div>
  );
};

export { MainVideoListing };
