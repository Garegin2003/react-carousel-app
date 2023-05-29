import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarousel,
  setCurrentPage,
  setEnlargedImages,
} from '../../store/slices/carouselSlice';
import fetchImages from '../../store/slices/carouselApi';
import Image from '../Image/Image';
import EnlargedCarouselImage from '../EnlargedCarouselImage/EnlargedCarouselImage';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import style from './Carousel.module.css';

const Carousel = () => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);
  const { images, currentPage, itemsPerPage } = carousel;
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    if (images.length > 0) {
      dispatch(setCurrentPage(1)); // Reset current page when new images are fetched
    }
  }, [images, dispatch]);
  console.log(images);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handleImageClick = (image) => {
    dispatch(setEnlargedImages(image));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(images.length / itemsPerPage);
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <>
      <CarouselSlider />
      <div className={style.carousel}>
        {displayedImages.map((image) => (
          <Image
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}{' '}
      </div>
      <div className={style.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(images.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
      <EnlargedCarouselImage />
    </>
  );
};

export default Carousel;
