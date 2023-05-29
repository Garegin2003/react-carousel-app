import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarousel,
  setEnlargedImages,
} from '../../store/slices/carouselSlice';
import style from './EnlargedCarouselImage.module.css';

const EnlargedCarouselImage = () => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);
  const { enlargedImage } = carousel;

  const handleClose = () => {
    dispatch(setEnlargedImages(null));
  };

  if (!enlargedImage) {
    return null;
  }
  return (
    <div
      className={style.enlarged_carousel_image_overlay}
      onClick={handleClose}
    >
      <div className={style.enlarged_carousel_image_container}>
        <img src={enlargedImage.thumbnail} alt={enlargedImage.title} />
        <div className={style.image_info}>
          <h2>
            {enlargedImage.title} {enlargedImage.price}$
          </h2>
          <p>{enlargedImage.description}</p>
        </div>
        <button className={style.close_button} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EnlargedCarouselImage;
