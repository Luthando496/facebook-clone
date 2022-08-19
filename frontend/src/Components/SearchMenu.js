import React from "react";
import { Return, Search } from "../svg";

const SearchMenu = ({ show, setShow }) => {
  const color = "#1b74e4";
  return (
    <div className="header_left search_area scrollbar">
      <div className="search_wrap">
        <div className="header_logo">
          <div className="circle hover-1" onClick={() => setShow(!show)}>
            <Return />
          </div>
        </div>
        <div className="search">
          <div>
            <Search color={color} />
          </div>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a href="#">Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
};

export default SearchMenu;
