import { configureStore } from "@reduxjs/toolkit";
import { carouselReducer } from "./slices/carouselSlice";

const store = configureStore({
    reducer: {
        carousel: carouselReducer
    }
})

export default store