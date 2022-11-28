import React from 'react'
import Contenido from './Contenido/Contenido'
import Formulario from './Formulario/Formulario'
import Slider from './Slider/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <Contenido/>
      <Formulario/>
    </div>
  )
}

export default Home