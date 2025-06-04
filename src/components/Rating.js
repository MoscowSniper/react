import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2; // Proper rounding to nearest 0.5

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars.push(<FaStar key={i} color="#ffc107" />);
        } else if (i - 0.5 === roundedRating) {
            stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
        } else {
            stars.push(<FaRegStar key={i} color="#ffc107" />);
        }
    }

    return <div className="rating">{stars} <span>({rating})</span></div>;
};

export default Rating;