import React, { Fragment } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../WishlistSlice';
import './wishlist.scss';
const Wishlist = () => {
    // const [card, setCard] = useState([])
    const wishlistItems = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()
   
   
    const handleRemoveFromWishlist = (id) => {
        dispatch(removeItem(id));
    };  
    return (
        <>
            <div style={{backgroundColor:'blueviolet'}}>
                {wishlistItems && wishlistItems.map((item) => (
                    <div>
                        <Fragment key={item.id}>
                            <p>{item.title}</p>
                            <button onClick={() => handleRemoveFromWishlist(item.id)}><IoClose /></button>
                        </Fragment>

                    </div>
                ))}
            </div>

            
        </>
    )
}

export default Wishlist
