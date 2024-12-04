import React, { useEffect, useRef, useState } from 'react';

export const ProductCard = ({ product }) => {
  const cardRef = useRef(null);
  const [cardSize, setCardSize] = useState(0);
  const review = 3;


  // Strip unnecessary characters
  const images = product.images.map(item => 
      item.replace(/[\[\]"']/g, '').trim()
  );


  useEffect(() => {
    if (cardRef.current) {
      setCardSize(cardRef.current.offsetWidth);
    }
  }, [cardRef.current]);

  return (
    <div>
      <div
        ref={cardRef}
        className='product-card duration-500 border-black rounded-2xl bg-gray-200 hover:drop-shadow-xl'

      >
        <img
          src={images[0]}
          alt={product.title}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <div className='flex gap-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            index < review ? <i key={index} className="fa-solid fa-star text-amber-500 fa-sm"></i> : <i key={index} className="fa-regular fa-star fa-sm"></i>
          ))}
        </div>
        <p className="text-2xl font-bold">${product.price}</p>
      </div>
    </div>
  );
};