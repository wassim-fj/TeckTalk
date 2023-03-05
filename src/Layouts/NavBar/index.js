import EsportsLogo from "./../../assets/imgs/esports.png";
import TTLogo from "./../../assets/imgs/TT.png";
import ProfileLogo from "./../../assets/imgs/Profile.png";
import CoinLogo from "./../../assets/imgs/coins.png";
import { NavLink } from "react-router-dom";
import React from "react";
import "./_index.scss";

const NavBar = () => {
  return (
    <header className="header">
      <div>
        <img className="tt-logo" src={EsportsLogo} alt="tt-logo" />
        <img className="esports-logo" src={TTLogo} alt="E-sports-logo" />
      </div>
      <nav className="navbar">
        <ul>
          <NavLink to={"/"} activeClassName="active" end>
            tableau de bord
          </NavLink>
          <NavLink to={"/games"} activeClassName="active">
            jeu
          </NavLink>
          <NavLink to={"/shop"} activeClassName="active">
            boutique
          </NavLink>
          <NavLink to={"/competition"} activeClassName="active">
            tournaments
          </NavLink>
          <NavLink to={"/events"} activeClassName="active">
            evénements
          </NavLink>
          <NavLink to={"/Teams"} activeClassName="active">
            équipe
          </NavLink>
          <NavLink to={"/Help"} activeClassName="active">
            aide
          </NavLink>
        </ul>
      </nav>
      <div className="profile">
        <div className="profile-info">
          <span className="profile-name"> Wassim</span>
          <span className="profile-coin">
            100
            <img className="coin-img" src={CoinLogo} alt="coin-img" />
          </span>
        </div>
        <img className="profile-img" src={ProfileLogo} alt="tt-logo" />
      </div>
    </header>
  );
};

export default NavBar;
