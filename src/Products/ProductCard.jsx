import React, { useEffect, useRef, useState } from 'react';

export const ProductCard = ({ image }) => {
  const cardRef = useRef(null);
  const [cardSize, setCardSize] = useState(0);
  const review = 3

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
      style={{ height: `${cardSize + 10}px` }}
    >
      <img
        src='src/assets/316518250_11374602.png'
        alt="Product"
        className='w-full h-full object-cover rounded-2xl'
      />
    </div>
    <div className="flex flex-col gap-3 py-4">
        <h2 className="text-xl font-semibold">Graphics Card</h2>
        <div className='flex gap-2'>
            {Array.from({ length: 5}).map((_, index) => (
                index < review ? <i key = {index} className="fa-solid fa-star text-amber-500 fa-sm"></i> : <i key = {index} className="fa-regular fa-star fa-sm"></i> 
                
            ))}
        </div>
        <p className="text-2xl font-bold">$450</p>
      </div>
    </div>
  );
};