import React from 'react';
import { FilterHeader } from './FilterHeader';
import { DualRangeSlider } from './DualRangeSlider';

export const Filter = () => {
  const handleRangeChange = (values) => {
    console.log('Selected range:', values);
  };

  return (
    <div>
        <FilterHeader title={"Filter"} icons={"fa-solid fa-filter"}/>
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
      <div>
        <FilterHeader title={"Price"} icons={"fa-solid fa-filter"} />
        <DualRangeSlider min={0} max={1000} onChange={handleRangeChange} />
      </div>
    </div>
  );
};