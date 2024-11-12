const Rating = ({ value, maximumValue = 5 }) => {

  const filledStars = Math.min(value, maximumValue);
  const emptyStars = maximumValue - filledStars;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={`filled-${i}`} className="star filled">★</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;