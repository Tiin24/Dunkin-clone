import React from "react";
import style from "./store.module.css";
import data from "../../assets/Objeto/Objeto";
import Card from "./Card/Card";

function Store() {
  return (
    <section className={style.main}>
      <article className={style.article}>
        <div className={style.div1_button}>
          <button className={style.button1}>
            <label className={style.labelbuttonS}>Todos</label>
          </button>
        </div>
        <div className={style.center_div}>
          <button className={style.button1cen}>
            <label className={style.labelbuttonS}>Donuts</label>
          </button>
          <button className={style.button1center}>
            <label className={style.labelbuttonS}>
              Cafe & bebidas calientes
            </label>
          </button>
          <button className={style.button1center}>
            <label className={style.labelbuttonS}>Cafe & bebidas frias</label>
          </button>
          <button className={style.button1center}>
            <label className={style.labelbuttonS}>
              Sandwiches, Wraps & Ensaladas
            </label>
          </button>
        </div>
        <div className={style.div1_button}>
          <button className={style.button2}>
            <label className={style.labelbuttonS}>Snaks & Muffins</label>
          </button>
        </div>
      </article>
      <article className={style.contain_card}>
        {
          // eslint-disable-next-line array-callback-return
          data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            );
          })
        }
      </article>
    </section>
  );
}

export default Store;
