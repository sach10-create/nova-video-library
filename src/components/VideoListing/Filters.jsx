import { useVideos } from "../../context";

const Filters = () => {
  const { categoriesData, videosState, videosDispatch, clearFilters } =
    useVideos();

  const categoryFilterHandler = (e, name) =>
    videosDispatch({
      categoryName: name,
      categoryType: "FILTER_CATEGORY",
      categoryFilters: ((categoryFilters, e) => {
        const newCategoryFilters = { ...categoryFilters };
        newCategoryFilters[name] = e.target.checked;
        return newCategoryFilters;
      })(videosState.categoryFilters, e),
    });
  const checkResetCatergoryFilters = () =>
    Object.keys(videosState.categoryFilters).filter(
      (item) => videosState.categoryFilters[item]
    ).length > 0
      ? false
      : true;

  const resetFilters = () => videosDispatch({ ...clearFilters });

  console.log(videosState);

  return (
    <div className="chip-container-video d-flex flex-wrap align-center">
      {categoriesData.length && Object.keys(videosState).length && (
        <label
          className={`basic-chip-video ${
            checkResetCatergoryFilters() ? "filter-checked-chip" : ""
          }`}
          key={"All"}
        >
          <input
            type="checkbox"
            className="filters"
            value="FILTER_CATEGORY"
            checked={checkResetCatergoryFilters() ? true : false}
            onChange={resetFilters}
          />
          <p className="basic-chip-content">All</p>
        </label>
      )}
      {categoriesData.length !== 0 &&
        Object.keys(videosState).length !== 0 &&
        categoriesData.map(({ _id, categoryName }) => (
          <label
            className={`basic-chip-video ${
              videosState.categoryFilters[categoryName]
                ? "filter-checked-chip"
                : ""
            }`}
            key={_id}
          >
            <input
              type="checkbox"
              className="filters"
              value="FILTER_CATEGORY"
              checked={videosState.categoryFilters[categoryName] ? true : false}
              onChange={(e) => categoryFilterHandler(e, categoryName)}
            />
            <p className="basic-chip-content">{categoryName}</p>
          </label>
        ))}
    </div>
  );
};

export { Filters };
