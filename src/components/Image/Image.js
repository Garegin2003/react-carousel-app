const Image = ({ image, onClick }) => {
    return (
      <div className="image" onClick={onClick}>
        <img src={image.url} alt={image.title} />
      </div>
    );
  };
  
export default Image;