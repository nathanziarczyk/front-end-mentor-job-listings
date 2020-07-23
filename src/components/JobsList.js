import React, { useContext, useEffect } from "react";

import { Context } from "../App";
import JobsListItem from "./JobsListItem";

export default function JobsList() {
  const [data] = useContext(Context);
  return (
    <div className="list">
      {data.jobs.map((listing) => (
        <JobsListItem listing={listing} />
      ))}
    </div>
  );
}
