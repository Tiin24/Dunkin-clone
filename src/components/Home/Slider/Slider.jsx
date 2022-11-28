import React from 'react'
import style from './Slider.module.css'

function Slider() {
  return (
    <div className={style.slider}>
        <ul className={style.uList}>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/11/banners_navidad_web_1920x870.jpeg" alt="" />
            </li>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/09/Banners-Dunkin-Morning-1920x870-1.jpg" alt="" />
            </li>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/10/25AnS%CC%A7os_Banner_1920x870.jpeg" alt="" />
            </li>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/11/banner_championship_Web_1920x870.jpeg" alt="" />
            </li>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/11/banners_prestigio_web_1920x870-dunkin-chile.jpeg" alt="" />
            </li>
            <li className={style.List}>
                <img className={style.image} src="https://dunkin.cl/wp-content/uploads/2022/10/CMR-DUNKIN-MARTES-1920X870.jpg" alt="" />
            </li>
        </ul>
    </div>
  )
}

export default Slider