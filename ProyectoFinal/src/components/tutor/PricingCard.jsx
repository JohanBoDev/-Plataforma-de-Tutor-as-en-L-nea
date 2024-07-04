import React from 'react';

const PricingCard = ({ price, duration, description }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{price}</h2>
      <p>{duration}</p>
      <p className="font-bold">{description}</p>
    </div>
  );
};

export default PricingCard;
