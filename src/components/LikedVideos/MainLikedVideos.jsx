import { useAuth, useLikedVideos } from "../../context";
import { Link } from "react-router-dom";

const MainLikedVideos = () => {
  const { authState } = useAuth();
  const { likedVideosState } = useLikedVideos();

  return (
    <div className="extra">
      {likedVideosState.likedVideosData.length !== 0 ? (
        likedVideosState.likedVideosData.map(
          ({
            _id,
            title,
            views,
            channelName,
            subscribers,
            verified,
            likes,
            duration,
            category,
            profileURL,
            description,
            thumbnailURL,
            videoURL,
          }) => (
            <div className="video-card-container" key={_id}>
              <Link to="{videos/${_id}}" className="video-card-image-container">
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
                    <h6>
                      {" "}
                      {channelName}
                      {verified && <i className="fa-solid fa-circle-check"></i>}
                    </h6>
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
            </div>
          )
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export { MainLikedVideos };
