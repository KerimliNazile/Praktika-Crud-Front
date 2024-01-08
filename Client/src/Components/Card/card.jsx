import React from 'react'

import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import "./index.scss"
import { Link } from 'react-router-dom';


const Card = ({ id, title, description, image, category }) => {
 
  console.log(id);
  return (

   
      <div className='card0'>
        <div className='CardIcon'>
          <div ><FaHeart /></div>
          <div ><Link to={`/details/` + id}> <FaRegEye className='regeye'/> </Link></div>
        </div>
        <div className='add'><Link>Add To Cart</Link>
        </div>
        <div className='card-comp'>
          <div className='image'>
            <img src={image} alt="" />
          </div>
        </div>

        <div className="content">
          <h2>{title}</h2>
          
          
           
          </div>
        </div>
     


  )
}

export default Card