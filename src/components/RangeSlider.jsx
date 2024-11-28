import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export const RangeSlider = ({ Slidervalue }) => {
  const [value, setValue] = Slidervalue;

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        sx={{ color: 'black' }}
        className="text-black"
      />
      <Box className="flex justify-between mt-1">
        <p className="font-bold">${value[0]}</p>
        <p  className="font-bold">${value[1]}</p>
      </Box>
    </Box>
  );
};

function valuetext(value) {
  return `${value}°C`;
}