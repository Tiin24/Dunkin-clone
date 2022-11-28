import React from "react";
import style from "./Formulario.module.css";
import { BiPaperPlane } from "react-icons/bi";

function Formulario() {
  return (
    <div className={style.container}>
      <div className={style.container_form}>
        <div className={style.contain_title}>
          <h2 className={style.Title}>
            ¡UN DUNKIN' LOVER RECIBE NUESTRAS NOVEDADES!
          </h2>
        </div>
        <div className={style.contain_formulario}>
          <form action="" className={style.formulario}>
            <div className="contain_content">
              <div className={style.contain_inputs}>
                <label className={style.label_F}>Nombre</label>
                <input type="text" placeholder="Nombre" />
              </div>
              <div className={style.contain_inputs}>
                <label className={style.label_F}>Ciudad</label>
                <input type="text" placeholder="Ciudad" />
              </div>
              <div className={style.contain_inputs}>
                <label className={style.label_F}>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className={style.contain_inputs}>
                <label className={style.label_F}>Fecha de nacimiento</label>
                <input type="date" placeholder="Fecha Nacimiento" />
              </div>
              <div className={style.contain_button}>
                <button className={style.button_S} type="submit">
                  <BiPaperPlane />
                  <span className={style.spanF}>ENVIAR</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
