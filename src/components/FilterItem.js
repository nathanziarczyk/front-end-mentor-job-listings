import React, { useContext } from "react";
import { Context } from "../App";

export default function FilterItem({ item }) {
  const [data, dispatch] = useContext(Context);
  const removeFilter = (name) => {
    dispatch({ type: "REMOVE_FILTER", payload: name });
  };
  return (
    <div className="tag">
      <p>{item}</p>
      <div className="img-container" onClick={() => removeFilter(item)}>
        <img src={require("./images/icon-remove.svg")} alt="remove" />
      </div>
    </div>
  );
}
