import React from 'react';

const Card = ({title, description, imageSrc}:any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={imageSrc} alt={title} />
      <div className="p-4">
        <h3 className="text-gray-800 text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
