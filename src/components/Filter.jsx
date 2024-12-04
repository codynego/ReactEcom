import React, { useEffect } from 'react';
import { FilterHeader } from './FilterHeader';
import { DualRangeSlider } from './DualRangeSlider';
import { RangeSlider } from './RangeSlider'
import { useState, UseEffect } from 'react';



export const Filter = ({products,  setProducts, setIsFetching}) => {
  const [maxPrice, setMaxPrice] = useState(1000);
  

  const [sliderValue, setSliderValue] = useState([0, maxPrice]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryActive, setCategoryActive] = useState(false);
  
  
    const buildUri = (category, priceRange) => {
      let uri = 'https://api.escuelajs.co/api/v1/products';
      const params = [];

      if (categoryActive) {
        params.push(`categoryId=${category}`);
      }
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange;
        params.push(`price_min=${minPrice}`);
        params.push(`price_max=${maxPrice}`);
      }
      if (params.length > 0) {
        uri += `?${params.join('&')}`;
      }
      console.log(uri)
      return uri;
      
    }
        
  // const [data, isDataFetched] = UseFetch(buildUri(selectedCategory, sliderValue), setIsFetching);
  //   console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true)
        const response = await fetch(buildUri(selectedCategory, sliderValue));
        const data = await response.json();
        
        setProducts(data);
        setIsFetching(false)
      } catch (error) {
        console.error(error);
        }
      }
      fetchData()
  }, [selectedCategory, sliderValue]);




  const handleCategoryChange = (category) => {
    
    if (selectedCategory) {
      if (selectedCategory === category) {
      setCategoryActive(!categoryActive);
    } else {
      setCategoryActive(true);
      setSelectedCategory(category);
    }
  } else {
    setSelectedCategory(category);
    setCategoryActive(true);
  }
  }; 

  const handleRangeChange = (values) => {
    console.log('Selected range:', values);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 hidden md:block">
        <FilterHeader  title={"Filter"} icons={"fa-solid fa-filter"} />
        <p className='py-5 border-b-2 border-gray-500'></p>

      <div className='border-b-2 py-4 border-gray-300'>
        <div className='flex justify-between'>
          <p>Clothes</p>
          <i className="fa-solid fa-circle-chevron-right" onClick={() => handleCategoryChange(1)}></i>
        </div>
        <div className='flex justify-between'>
          <p>Shoes</p>
          <i className="fa-solid fa-circle-chevron-right" onClick={() => handleCategoryChange(4)}></i>
        </div>
        <div className='flex justify-between'>
          <p>Electronics</p>
          <i className="fa-solid fa-circle-chevron-right" onClick={() => handleCategoryChange(2)}></i>
        </div>
        <div className='flex justify-between'>
          <p>Others</p>
          <i className="fa-solid fa-circle-chevron-right" onClick={() => handleCategoryChange(3)}></i>
        </div>
      </div>

      <div className='border-b-2 py-4  border-gray-300'>
        <FilterHeader title={"Price"} icons={"fa-solid fa-filter"} />
        {/* <DualRangeSlider min={0} max={1000} onChange={handleRangeChange} /> */}
        <RangeSlider Slidervalue={[sliderValue, setSliderValue]} maxPrice={maxPrice} setMaxPrice={setMaxPrice}className="bg-red-500 text-blue-900" />
      </div>

      <div className='border-b-2 py-4  border-gray-300'>
        <FilterHeader title={"Color"} icons={"fa-solid fa-filter"} />
        <div className='flex  w-full flex-wrap gap-2 py-3'>
          <div className="bg-red-400 border-[1px] border-black rounded-full w-9 h-9 cursor-pointer"></div>
          <div className='bg-blue-400 border-[1px] border-black w-9 h-9  rounded-full cursor-pointer'></div>
          <div className="bg-green-400 border-[1px] border-black rounded-full w-9 h-9 cursor-pointer"></div>
          <div className='bg-yellow-400 border-[1px] border-black w-9 h-9  rounded-full cursor-pointer'></div>
          <div className="bg-purple-400 border-[1px] border-black rounded-full w-9 h-9 cursor-pointer"></div>
          <div className='bg-black w-9 h-9 border-[1px] border-black rounded-full cursor-pointer'></div>
          <div className="bg-white rounded-full border-[1px] border-black w-9 h-9 cursor-pointer"></div>
          <div className='bg-blue-100 border-[1px] border-black w-9 h-9  rounded-full cursor-pointer'></div>
          <div className="bg-red-700 rounded-full border-[1px] border-black w-9 h-9 cursor-pointer"></div>
          <div className='bg-blue-900 w-9 h-9 border-[1px] border-black rounded-full cursor-pointer'></div>
        </div>
      </div>

      <div className=' py-4  border-gray-300'>
        <FilterHeader title={"Size"} icons={"fa-solid fa-filter"} />
        <div className='flex  w-full flex-wrap gap-2 py-3'>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>XX-Small</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>X-Small</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>Small</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>Medium</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>Large</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>X-Large</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>XX-Large</div>
          <div className='bg-gray-200 rounded-full flex justify-center items-center text-gray-600 font-semibold py-2 px-4 cursor-pointer hover:bg-black hover:text-white'>3X-Large</div>
        </div>
      </div>

      <div>
        <button className="w-full bg-black text-white rounded-full p-3 font-semibold hover:opacity-80">Apply Filter</button>
      </div>
    </div>
  );
}