import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Dropdown from "./Dropdown";
import {BiChevronDown} from 'react-icons/bi'

function Navbar() {
  const [dropdown, setDropdown] = useState(true);

  return (
    <>
      <nav className={style.navbar}>
        <Link to="/" className={style.navbar_logo}>
          <img
            className={style.logo}
            src="https://dunkin.cl/wp-content/uploads/2022/03/Dunkin-Logo-1000x201-1-300x60.png"
            alt="logo"
          />
        </Link>
        <ul className={style.nav_items}>
          <li
            className={style.cName}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <label className={style.text_L}>PRODUCTOS <BiChevronDown/></label>
            {dropdown && <Dropdown />}
          </li>
          <li className={style.cName}>
            <label className={style.text_L}>
              <Link className={style.linkNav}>LOCALES</Link>
            </label>
          </li>
          <li className={style.cName}>
            <label className={style.text_L}>
              <Link className={style.linkNav}>PROMOCIONES</Link>
            </label>
          </li>
          <li className={style.cName}>
            <label className={style.text_L}>
              <Link className={style.linkNav}>NOSOTROS</Link>
            </label>
          </li>
          <li className={style.cName}>
            <label className={style.text_L}>
              <Link className={style.linkNav}>CONTACTO</Link>
            </label>
          </li>
          <li className={style.cName}>
            <label className={style.text_L}>
              <Link className={style.linkNav}>TRABAJA CON NOSOTROS</Link>
            </label>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
