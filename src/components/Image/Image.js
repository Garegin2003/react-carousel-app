import React from "react";
import style from './Image.module.css'

const Image = ({ image, onClick }) => {
    return (
      <div className={style.image} onClick={onClick}>
        <img src={image.thumbnail} alt={image.title} />
      </div>
    );
  };
  
export default Image;