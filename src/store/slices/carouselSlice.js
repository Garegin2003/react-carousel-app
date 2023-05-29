import { createSlice } from "@reduxjs/toolkit";
import fetchImages from "./carouselApi";

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        images: [],
        currentPage:1,
        itemsPerPage: 10,
        currentIndex: 0,
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
        },
        setCurrentIndex: (state, action) => {
          state.currentIndex = action.payload % state.images.length;
        },
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

export const {setImages, setCurrentPage, setEnlargedImages, setCurrentIndex} = carouselSlice.actions

export const selectCarousel = state => state.carousel

export const carouselReducer = carouselSlice.reducer