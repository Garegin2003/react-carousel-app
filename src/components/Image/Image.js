const Image = ({ image, onClick }) => {
    return (
      <div className="image" onClick={onClick}>
        <img src={image.images[0]} alt={image.title} />
      </div>
    );
  };
  
export default Image;