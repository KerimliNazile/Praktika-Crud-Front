import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "./index.scss"
import { Link } from 'react-router-dom';


const Card = ({ id, title, description, image, category }) => {
 
  console.log(id);
  return (

   
      <div className='card0'>
        <div className='CardIcon'>
          <div ><FaRegHeart /></div>
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
          <h2>{description}</h2>
          <h2>{category}</h2>
          
          
           
          </div>
        </div>
      )
}

export default Card


 

