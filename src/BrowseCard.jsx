import React from 'react';

export const BrowseCard = ({ span }) => {
  const spanClass = span ? 'md:col-span-2' : '';
  return (
    <div className={`flex bg-white rounded-2xl w-full h-[150px] md:h-[250px] ${spanClass}`}>
      <div className='font-bold p-10 text-3xl'>Casual</div>
      <div className='bg-[url("src/assets/22.jpg")] bg-cover bg-center bg-no-repeat w-[300px] h-full'></div>
    </div>
  );
};