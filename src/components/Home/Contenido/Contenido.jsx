import React from "react";
import style from "./Contenido.module.css";

function Contenido() {
  return (
    <>
      <section>
        <div className={style.elementor_container}>
          <div className={style.container_left}>
            <div className={style.title_container}>
              <h2 className={style.titulo}>NUESTRAS DONUTS</h2>
            </div>
            <div className={style.parrafo_contain}>
              <p className={style.Parrafo}>
                Alegrando la Vida. Horneamos nuestra filosofía, que cada bocado
                de nuestra Donuts sea tan bueno como el momento que lo rodea.
                Hemos creado miles de variedades de Donuts y estamos orgullosos
                de ofrecer Donuts que representan nuestra cultura local.
              </p>
            </div>
            <div className={style.buttom_contain}>
              <button className={style.Boton}>
                <p className={style.boton_p}>VER MÁS</p>
              </button>
            </div>
          </div>
          <div className={style.container_rigth}>
            <img
              src="https://dunkin.cl/wp-content/uploads/2022/04/donuts-inicio-chile-300x300.png"
              width="300"
              height="300"
              alt="..."
            />
          </div>
        </div>
      </section>
      <section>
        <div className={style.elementor_container}>
          <div className={style.container_rigth_2}>
            <img
              src="https://dunkin.cl/wp-content/uploads/2022/04/Cafes-Bebidas-dunkin-600-267x300.png"
              width="267"
              height="300"
              alt="..."
            />
          </div>
          <div className={style.container_left}>
            <div className={style.title_container}>
              <h2 className={style.titulo}>
                EL MEJOR CAFÉ COMIENZA CON EL MEJOR GRANO.
              </h2>
            </div>
            <div className={style.parrafo_contain}>
              <p className={style.Parrafo}>
                Compartimos energía Positiva en cada taza de Café. Cultivamos
                relaciones duraderas con los cafeteros para obtener los mejores
                granos de las zonas cafeteras, 100% arábicos y con certificación
                Rainforest Alliance.
              </p>
            </div>
            <div className={style.buttom_contain}>
              <button className={style.Boton}>
                <p className={style.boton_p}>VER MÁS</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.elementor_container}>
          <div className={style.container_left}>
            <div className={style.title_container}>
              <h2 className={style.titulo}>SÁNDWICHES, WRAPS Y ENSALADAS</h2>
            </div>
            <div className={style.parrafo_contain}>
              <p className={style.Parrafo}>
                Sabemos que cada persona tiene sus gustos y en Dunkin’ tenemos
                el sándwich perfecto para cada momento del día.
              </p>
            </div>
            <div className={style.buttom_contain}>
              <button className={style.Boton}>
                <p className={style.boton_p}>VER MÁS</p>
              </button>
            </div>
          </div>
          <div className={style.container_rigth3}>
            <img
              src="https://dunkin.cl/wp-content/uploads/2022/04/sandwich-dunkin-chile-300x238.png"
              width="300"
              height="238"
              alt="..."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contenido;
