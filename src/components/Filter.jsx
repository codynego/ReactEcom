import React from 'react';
import { FilterHeader } from './FilterHeader';
import { DualRangeSlider } from './DualRangeSlider';
import { RangeSlider } from './RangeSlider'

export const Filter = () => {
  const [Slidervalue, setSliderValue] = React.useState([0, 1000]);
  


  const handleRangeChange = (values) => {
    console.log('Selected range:', values);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 hidden md:block">
        <FilterHeader  title={"Filter"} icons={"fa-solid fa-filter"} />
        <p className='py-5 border-b-2 border-gray-500'></p>
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

      <div className='border-b-2 py-4  border-gray-300'>
        <FilterHeader title={"Price"} icons={"fa-solid fa-filter"} />
        {/* <DualRangeSlider min={0} max={1000} onChange={handleRangeChange} /> */}
        <RangeSlider Slidervalue={[Slidervalue, setSliderValue]} className="bg-red-500 text-blue-900" />
      </div>
      <div className='border-b-2 py-4  border-gray-300'>
        <FilterHeader title={"Color"} icons={"fa-solid fa-filter"} />
        <div className='flex  w-full flex-wrap gap-4'>
          <div className="bg-red-400 rounded-full w-8 h-8"></div>
          <div className='bg-blue-400 w-8 h-8'></div>
          <div className="bg-red-400 rounded-full w-8 h-8"></div>
          <div className='bg-blue-400 w-8 h-8'></div>
          <div className="bg-red-400 rounded-full w-8 h-8"></div>
          <div className='bg-blue-400 w-8 h-8'></div>

        </div>
      </div>
    </div>
  );
}