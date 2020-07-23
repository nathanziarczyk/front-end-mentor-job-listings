import React, { useContext } from "react";
import { Context } from "../App";
import FilterItem from "./FilterItem";

export default function Filter() {
  const [data, dispatch] = useContext(Context);
  const resetFilter = () => {
    dispatch({ type: "RESET_FILTER" });
  };

  return data.filters.length > 0 ? (
    <div className="filter container">
      <div className="tags">
        {data.filters.map((filter) => (
          <FilterItem item={filter} />
        ))}
      </div>
      <div className="clear">
        <p onClick={resetFilter}>Clear</p>
      </div>
    </div>
  ) : null;
}
