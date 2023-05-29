import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchImages = createAsyncThunk('carousel/fetchImages', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products; // Update to match the actual structure of the API response
  } catch (error) {
    throw new Error('Error fetching images: ' + error);
  }
});

export default fetchImages;
