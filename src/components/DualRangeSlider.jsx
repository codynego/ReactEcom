import React, { useState } from 'react';

export const DualRangeSlider = ({ min, max, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    onChange([value, maxValue]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    onChange([minValue, value]);
  };

  return (
    <div className="relative w-full">
      {/* Track */}
      <div className="absolute w-full h-2 bg-gray-200 rounded-lg">
        {/* Range Highlight */}
        <div
          className="absolute h-2 bg-blue-500 rounded-lg"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>

      {/* Min Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        className="absolute w-full h-2 bg-transparent appearance-none"
        style={{
          zIndex: minValue > maxValue - 100 ? 5 : 3, // Ensure overlap handling
        }}
      />

      {/* Max Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute w-full h-2 bg-transparent appearance-none"
        style={{
          zIndex: 2, // Higher than the min slider when overlapping
        }}
      />

      {/* Labels */}
      <div className="relative flex justify-between mt-4">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};
