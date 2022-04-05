const VideoHorizontalCard = ({ itemCount, videos , handleDelete }) => {
  return (
    <>
      {itemCount ? (
        videos.map(
          ({
            _id,
            title,
            channelName,
            verified,
            thumbnailURL,
          }) => (
            <li key={_id} className="no-list">
              <article className="horizontal-card-container">
                <div className="horizontal-image-container d-flex justify-content-center align-center">
                  <img
                    src={thumbnailURL}
                    alt={title}
                    title={title}
                    className="horizontal-card-img"
                  />
                </div>

                <div className="horizontal-text-container">
                  <h3 className="">{title}</h3>
                  <p className="">
                    {channelName}{" "}
                    {verified && <i className="fa-solid fa-circle-check"></i>}
                  </p>
                  <i className="fa-solid fa-trash-can" onClick={(e) => handleDelete(e , _id)}></i>
                </div>
              </article>
            </li>
          )
        )
      ) : (
        <h3> No Videos Added</h3>
      )}
    </>
  );
};

export { VideoHorizontalCard };
