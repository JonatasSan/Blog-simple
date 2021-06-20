import React from 'react'
import './Cards.css'

export default props => {

    return (
        <a href={props.link}  >
            <div className="cards">
                <h3 className="card_text">{props.title}</h3>
                <p className="card_text">{props.text}</p>
             </div>
        </a>  
    )
}