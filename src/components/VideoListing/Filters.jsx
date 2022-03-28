import {useVideos } from "../../context";

const Filters = () => {
  const { categoriesData, videosState , videosDispatch } = useVideos();

    const categoryFilterHandler = ( e , name) => videosDispatch({
        categoryName : name,
        categoryType : "FILTER_CATEGORY",
        categoryFilters : (( categoryFilters , e) => {
            const newCategoryFilters = { ...categoryFilters};
            newCategoryFilters[name] = e.target.checked;
            return newCategoryFilters;
        })(videosState.categoryFilters , e)
    })
    const checkResetCatergoryFilters = () => Object.keys(videosState.categoryFilters).filter((item) => videosState.categoryFilters[item]).length > 0 ? false : true; 

    const resetFilters = () => videosDispatch({...clearFilters});

  return (
    <div className="chip-container d-flex flex-wrap">
         { 
        (categoriesData.length !== 0 && Object.keys(videosState).length !== 0) &&
        categoriesData.map(({_id ,categoryName}) =>
      <label className={`basic-chip d-flex align-center flex-wrap ${videosState.categoryFilters[categoryName] ? "filter-checked-chip" : ""}`} key={_id} >
          <input 
          type="checkbox"
          value="FILTER_CATEGORY"
          checked = {checkResetCatergoryFilters}
          onChange = { resetFilters} />
        <p className="basic-chip-content">{categoryName}</p>
      </label>
        )}{ 
        (categoriesData.length !== 0 && Object.keys(videosState).length !== 0) &&
        categoriesData.map(({_id ,categoryName}) =>
      <label className={`basic-chip d-flex align-center flex-wrap ${videosState.categoryFilters[categoryName] ? "filter-checked-chip" : ""}`} key={_id} >
          <input 
          type="checkbox"
          value="FILTER_CATEGORY"
          checked = {videosState.categoryFilters[categoryName] ? true : false}
          onChange = { (e) => categoryFilterHandler(e , categoryName)} />
        <p className="basic-chip-content">{categoryName}</p>
      </label>
        )}
    </div>
  );
};

export {Filters};

