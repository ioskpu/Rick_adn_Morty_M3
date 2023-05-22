import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link, useNavigate } from "react-router-dom";

function Nav ({ onSearch, setAccess }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    setAccess(false);
  }

  return (
    <nav className={style.NavContainer}>

      <div className={style.navLogout}>
        <Link to="/" >
          <button className="btn" onClick={handleLogout}>Logout</button>
        </Link>
      </div>

      <div className={style.navLink}>
          <Link to="/home" className={style.navHome}>
            <button className="btn">Home</button>
          </Link>

          <Link to="/favorites" className={style.navFavourites}>
            <button className="btn">Favoritos</button>
          </Link>

          <Link to="/about" className={style.navAbout}>
            <button className="btn">Sobre mi</button>
          </Link>
      </div>

      <SearchBar onSearch={ onSearch } />
    </nav>
  );
}

export default Nav;