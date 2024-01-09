import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    const fetchdetails = async () => {
        const res = await fetch(`http://localhost:5000/books/${id}`)
        const json = await res.json()
        setDetail(json)
    }
    useEffect(() => {
        fetchdetails()
    }, [])
    return (
        <>
           
            {detail ? <>
                <div className='cards'>
                    <img src={detail.image} alt="" />
                    <h2>{detail.title}</h2>
                    <p>{detail.category}</p>
                    <h2>{detail.description}</h2>

                </div></> : ''}
        </>
    )
}

export default Detail