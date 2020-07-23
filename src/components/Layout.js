import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-desktop"></div>
      <div className="bg-mobile"></div>
      <div className="container">{children}</div>
    </div>
  );
}
