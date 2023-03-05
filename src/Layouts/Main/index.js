import React from "react";

import NavBar from "./../NavBar";

const Main = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="content">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Main;
