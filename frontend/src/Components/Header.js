import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Search,
  Watch,
  Notifications,
} from "../svg";
import "./Header.css";
import image from "../icons/facebook.svg";
import SearchMenu from "./SearchMenu";

const Header = () => {
  const [showSearch, setShow] = useState(false);

  const color = "#1b74e4";
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search-1" onClick={() => setShow(!showSearch)}>
          <Search color={color} />
          <input
            type="text"
            placeholder="search facebook"
            className="hide_input"
          />
        </div>
      </div>
      {showSearch && <SearchMenu show={showSearch} setShow={setShow} />}
      <div className="header-middle">
        <Link className="middle_icon active" to="/">
          <HomeActive />
        </Link>
        <Link className="middle_icon hover-1" to="/">
          <Friends />
        </Link>
        <Link className="middle_icon hover-1" to="/">
          <Watch />
          <div className="middle_notification">9+</div>
        </Link>
        <Link className="middle_icon hover-1" to="/">
          <Market />
        </Link>
        <Link className="middle_icon hover-1" to="/">
          <Gaming />
        </Link>
      </div>
      <div className="header-right">
        <Link className="profile_link" to="/profile">
          <img src={image} alt="profile picture" />
          <span>luthando</span>
        </Link>
        <div className="circle_icon hover-1">
          <Menu />
        </div>
        <div className="circle_icon hover-1">
          <Messenger />
        </div>
        <div className="circle_icon hover-1">
          <Notifications />
          <div className="right-notification">12+</div>
        </div>
        <div className="circle_icon hover-1">
          <ArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
