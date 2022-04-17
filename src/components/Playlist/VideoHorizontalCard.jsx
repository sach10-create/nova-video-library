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
            <li key={_id} className="no-list listing-container">
              <article className="horizontal-card-container">
                <div className="horizontal-image-container">
                  <img
                    src={thumbnailURL}
                    alt={title}
                    title={title}
                    className="horizontal-card-img"
                  />
                </div>
                <div className="horizontal-text-container">
                  <h3 className="h1-tag">{title}</h3>
                  <p className="h2-tag">
                    {channelName}{" "}
                    {verified && <i className="fa-solid fa-circle-check"></i>}
                  </p>
                  <div className="delete-list-icon">
                  <i className="fa-solid fa-trash-can h2-tag" onClick={(e) => handleDelete(e , _id)}></i>
                  </div>
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
