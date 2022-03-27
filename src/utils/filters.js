const VideoCompose =
  (videosState, ...functions) =>
  (videosData) =>
    functions.reduce((prev, curr) => curr(videosState, prev), videosData);

/**
 *
 * @param {Object} videosState State values for videos
 * @param {array} videosData videos Data
 * @returns {array} Array of videos filtered based on selected categories
 */
const CategoryVideos = (videosState, videosData) =>
  Object.keys(videosState.categoryFilters).filter(
    (item) => videosState.categoryFilters[item]
  ).length !== 0
    ? Object.keys(videosState.categoryFilters).reduce(
        (prev, curr) =>
          videosState.categoryFilters[curr]
            ? [
                ...prev,
                ...videosData.filter(
                  (video) =>
                    product.category.filter(
                      (videoCategory) => videoCategory === curr
                    ).length !== 0
                ),
              ]
            : prev,
        []
      )
    : videosData;
export {CategoryVideos , VideoCompose}