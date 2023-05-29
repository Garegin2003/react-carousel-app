import { createSlice } from "@reduxjs/toolkit";
import fetchImages from "./carouselApi";

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        images: [],
        currentPage:1,
        itemsPerPage: 10,
        enlargedImage: null
    },
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload || []
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload 
        },
        setEnlargedImages: (state, action) => {
            state.enlargedImage = action.payload
        }
    },
    extraReducers: {
        [fetchImages.pending]: () => {
          console.log('Loading...');
        },
        [fetchImages.fulfilled]: (state, action) => {
          console.log('Fulfilled', action.payload);
          state.images = action.payload || []; // Update the images state with the fetched images
        },
        [fetchImages.rejected]: () => {
          console.log('Rejected');
        }
      }
      
    
    
})

export const {setImages, setCurrentPage, setEnlargedImages} = carouselSlice.actions

export const selectCarousel = state => state.carousel

export const carouselReducer = carouselSlice.reducer