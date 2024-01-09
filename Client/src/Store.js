import { configureStore } from '@reduxjs/toolkit'
import wishlistreducer from './Components/WishlistSlice.jsx'
export const store= configureStore({
  reducer: {
    wishlist:wishlistreducer
  },
})