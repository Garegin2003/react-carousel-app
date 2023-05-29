import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarousel,
  setEnlargedImages,
} from '../../store/slices/carouselSlice';
import fetchImages from '../../store/slices/carouselApi';
import Image from '../Image/Image';

const Carousel = () => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);
  const { images, currentPage, itemsPerPage, enlargedImage } = carousel;
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  console.log(images);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handleImageClick = (image) => {
    dispatch(setEnlargedImages(image));
  };

  return (
    <div className="carousel">
      {displayedImages.map((image) => (
        <Image
          key={image.id}
          image={image}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {enlargedImage && (
        <div className="enlarged-image">
          <img src={enlargedImage.url} alt={enlargedImage.title} />
          <div className="image-details">
            <h3>{enlargedImage.title}</h3>
            <p>{enlargedImage.description}</p>
            <p>Price: ${enlargedImage.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
