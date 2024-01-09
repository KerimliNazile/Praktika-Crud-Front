import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../../Components/WishlistSlice'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import './home.scss'

const Home = () => {
  const [card, setCard] = useState([])
const dispatch=useDispatch()
  const BaseUrl = 'http://localhost:5000/books'

  async function fetchDatas() {
    const res = await axios.get(`${BaseUrl}`)
    setCard(res.data)
  }
  useEffect(() => {
    fetchDatas()
  }, [])

  const handleAddWishlist = (_id, title, description, category,image) => {
    dispatch(addItem  ({ _id: _id, title: title, description: description, category: category,image:image }))
    console.log(_id,title,description,category,image);
}
  return (
    <div>
      {
        card && card.map((item) =>
          <ul>
            <li>{item.title} </li>
            <li>{item.description}</li>
            <li>{item.image}</li>
            <li>{item.category}</li>
            <button onClick={()=>handleAddWishlist(item._id)}><FaRegHeart /></button>
            <Link to={`/detail/${item._id}`}><FaEye className='faEye'/></Link>
          </ul>

        )
      }
    </div>
  )
}

export default Home
