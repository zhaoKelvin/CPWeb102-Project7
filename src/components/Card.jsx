import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'


const Card = (props) =>  {

    // console.log(props)

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="entity">{"Mob Type: " + props.entity}</h3>
          <h4 className="hp">{"Hp: " + props.hp}</h4>
          <h4 className="damage">{"Damage: " + props.damage}</h4>
          <p className="description">{props.description}</p>
      </div>
  );
};

export default Card;