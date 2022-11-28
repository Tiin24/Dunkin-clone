import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.contain_elements}>
          <div className={style.element}>
            <img
              width="142"
              height="29"
              src="https://dunkin.cl/wp-content/uploads/2022/02/Dunkin-Logo-3840x772-1.png"
              alt="..."
            />
          </div>
          <div className={style.element}>
            <div>
              <h2 className={style.tilte_footer}>PRODUCTOS</h2>
            </div>
            <Link className={style.Link_Footer}>Donuts</Link>
            <Link className={style.Link_Footer}>Cafés & Bebidas calientes</Link>
            <Link className={style.Link_Footer}>Cafés & Bebidas frias</Link>
            <Link className={style.Link_Footer}>Sandwich, Wraps y ensaladas</Link>
            <Link className={style.Link_Footer}>Snack</Link>
          </div>
          <div className={style.element}>
            <h2 className={style.tilte_footer}>NOVEDADES</h2>
            <Link className={style.Link_Footer}>Promociones</Link>
          </div>
          <div className={style.element}>
            <h2 className={style.tilte_footer}>DELIVERY</h2>
            <Link className={style.Link_Footer}>Pide Aqui!</Link>
            <h2 className={style.tilte_footer}>LOCALES</h2>
            <Link className={style.Link_Footer}>Locales</Link>
          </div>
          <div className={style.element}>
            <h2 className={style.tilte_footer}>NOSOTROS</h2>
            <Link className={style.Link_Footer}>Nosotros</Link>
          </div>
          <div className={style.element}>
            <h2 className={style.tilte_footer}>CONTACTO</h2>
            <Link className={style.Link_Footer}>Contacto</Link>
            <Link className={style.Link_Footer}>Trabaja con Nosotros</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
