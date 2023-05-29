import { createSlice } from "@reduxjs/toolkit";

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
            state.images = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setEnlargedImages: (state, action) => {
            state.enlargedImage = action.payload
        }
    }
})

export const {setImages, setCurrentPage, setEnlargedImages} = carouselSlice.actions

export const selectCarousel = state => state.carousel

export const carouselReducer = carouselSlice.reducer