import React from 'react'
import Imagen from './logo192.png'
import './Heading.css'


export default function () {
    return(
        <div>
            <img src={Imagen} alt="imagen.png" />
            <h1>Jonatas dos Santos</h1>
            <p>Aprendendo e se dedicando na area de TI!</p>
        </div>
    )
}