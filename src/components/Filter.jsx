import React from 'react';
import { FilterHeader } from './FilterHeader';
import { DualRangeSlider } from './DualRangeSlider';

export const Filter = () => {
  const handleRangeChange = (values) => {
    console.log('Selected range:', values);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4">
        <FilterHeader title={"Filter"} icons={"fa-solid fa-filter"}/>
      
      <div className='border-b-2 py-4  border-gray-300'>
        <div className='flex justify-between'>
          <p>Casual</p>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
        <div className='flex justify-between'>
          <p>Casual</p>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
        <div className='flex justify-between'>
          <p>Casual</p>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>

      <div>
        <FilterHeader title={"Price"} icons={"fa-solid fa-filter"} />
        <DualRangeSlider min={0} max={1000} onChange={handleRangeChange} />
      </div>
    </div>
  );
}