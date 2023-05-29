const Image = ({ image, onClick }) => {
    return (
      <div className="image" onClick={onClick}>
        <img src={image.thumbnail} alt={image.title} />
      </div>
    );
  };
  
export default Image;