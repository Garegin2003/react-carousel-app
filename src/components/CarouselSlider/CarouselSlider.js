import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarousel,
  setCurrentIndex,
  setEnlargedImages,
} from '../../store/slices/carouselSlice';
import style from './CarouselSlider.module.css';

const CarouselSlider = () => {
  const carousel = useSelector(selectCarousel);
  const { images, currentIndex } = carousel;
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setCurrentIndex(currentIndex + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, dispatch]);
  const handleImageClick = (image) => {
    dispatch(setEnlargedImages(image));
  };
  const prevHandler = () => {
    dispatch(setCurrentIndex(currentIndex - 1));
  };

  const nextHandler = () => {
    dispatch(setCurrentIndex(currentIndex + 1));
  };

  if (!images.length) {
    return null;
  }

  return (
    <div className={style.carousel_slider}>
      <button onClick={prevHandler}>Previous</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumbnail}
          alt={image.title}
          className={index === currentIndex ? style['active'] : ''}
          onClick={() => handleImageClick(image)}
        />
      ))}
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default CarouselSlider;
