import React, { useEffect, useState } from 'react';

import Card from '../Card';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    const [loadind, setLoadind] = useState(true)
    async function getProducts() {
        const data = await fetch("http://localhost:5000/books")
        const res = await data.json()
        setProducts(res)
        setLoadind(false)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <div className="browseCategoryUpBox">
                <div className="todaysText">
                    <div className='normalBox'></div>
                    <p>Our Products</p>
                </div>
                <div className='salesTimer'>
                    <h1>Explore Our Products</h1>
                </div>
            </div>
            {loadind ? (
                <p>Loading...</p>
            ) : (

            
                    

                    {products.map((product, index) => (
                       
                            <Card key={index} id={product.id} image={product.image} title={product.title} category={product.category} description={product.description}  />
                       

                    ))}



                

            )}

        </>

    )
}

export default OurProducts