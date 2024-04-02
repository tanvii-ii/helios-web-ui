import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Drawer, Divider, Slider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50); // Initial value for the slider (adjust as needed)


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    // add functionality here based on the slider value change
  };

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Toolbar sx={{ backgroundColor: 'primary.main' }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Typography variant="body1">Size</Typography>
        <Slider
          value={sliderValue} // Set the initial value from state
          onChange={handleSliderChange}
          min={0} // Minimum value for the slider
          max={100} // Maximum value for the slider
          aria-labelledby="size-slider" 
        />
        {/* Add more settings components here */}
      </Drawer>
      <IconButton onClick={handleDrawerOpen} size="large" sx={{ position: 'absolute', top: 10, right: 10 }}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
