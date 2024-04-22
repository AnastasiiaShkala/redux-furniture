import { createSlice } from '@reduxjs/toolkit'

export const furnitureSlice = createSlice({
    name: 'furniture',
    initialState: {
        selectedCategory: "ALL"
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.furniture.selectedCategory;
export default furnitureSlice.reducer;
export const {filterCategory} = furnitureSlice.actions;