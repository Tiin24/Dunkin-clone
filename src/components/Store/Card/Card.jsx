import React from "react";
import style from './Card.module.css'

function Card({ name, image, description }) {
  return (
     <div className={style.card}>
        <div className={style.contain_image}>
            <img className={style.image_store} src={image} alt={name} />
        </div>
        <div className={style.contain_description}>
            <h2 className={style.item_name}>{name}</h2>
            <p className={style.item_description}>{description}</p>
        </div>
    </div>
    )
}

export default Card;
