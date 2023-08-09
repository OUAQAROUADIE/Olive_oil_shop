import React from 'react'
import '../App.css';


function HomeCard(props) {
  return (
    <div className='cards'>
        <img className='rounded-circle card_home ' src={props.img}></img>
        <h3 className='title_Card'>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default HomeCard