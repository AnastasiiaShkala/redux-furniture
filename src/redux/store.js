import { configureStore } from '@reduxjs/toolkit';
import furniture from './furnitureSlice';
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
        furniture,
        cart
    },
})