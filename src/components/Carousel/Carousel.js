import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCarousel, setImages } from "../../store/slices/carouselSlice";
import fetchImages from "../../store/slices/carouselApi";

const Carousel = () => {
    const dispatch = useDispatch()
    const images = useSelector(selectCarousel)

    useEffect(() => {
        dispatch(fetchImages())
        .then(response => dispatch(setImages(response.payload)))
        .catch(error => {
            console.log('Error fetching images: ', error);
        })
    }, [dispatch])

    return (
        <div className="carousel">
            {
                images.map(image => (
                    <Image key = {image.id} image = {image} />
                ))
            }
        </div>
    )
}

export default Carousel