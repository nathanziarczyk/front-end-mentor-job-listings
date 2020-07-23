import React, { useContext } from "react";

import { Context } from "../App";

export default function JobsListItem({ listing }) {
  const [data, dispatch] = useContext(Context);

  const handleFilter = (e) => {
    dispatch({ type: "ADD_FILTER", payload: e.currentTarget.innerHTML });
  };

  return (
    <div className="list-item" key={listing.id}>
      <div className="left">
        <div className="pic">
          <img src={require(`${listing.logo}`)} alt="" />
        </div>
        <div className="content">
          <div className="above-title">
            <h3 className="company">{listing.company}</h3>
            <div className="new-feat">
              {listing.new && <p key={"new"}>New!</p>}
              {listing.featured && (
                <p className="feat" key={"featured"}>
                  Featured!
                </p>
              )}
            </div>
          </div>
          <div className="title">
            <h3> {listing.position}</h3>
          </div>
          <div className="sub-title">
            <ul>
              <li> {listing.postedAt} </li>
              <li> {listing.contract} </li>
              <li> {listing.location} </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="tags">
          <p onClick={handleFilter}>{listing.role}</p>
          <p onClick={handleFilter}>{listing.level}</p>
          {listing.languages.map((el) => (
            <p key={el} onClick={handleFilter}>
              {el}
            </p>
          ))}
          {listing.tools.map((el) => (
            <p key={el} onClick={handleFilter}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
