import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Drawer, Divider, Slider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerComponent = ({ helios }) => {
  const [open, setOpen] = useState(false);
  const [nodeSize, nodeSizeSliderValue] = useState(50); // Initial value for the slider 
  const [edgeOpacity, setEdgeOpacity] = useState(50);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNodeSizeSlider = (event, newValue) => {
    nodeSizeSliderValue(newValue);
    // console.log('helios instance from drawercomponent', helios);
    if (helios) {
     const newScale = Math.pow(10, newValue / 100); // Normalize value (0-100 to 0-1)
     helios.nodesGlobalSizeScale(newScale);
     helios.render();
    }
  };

  const handleEdgesOpacitySlider = (event, newValue) => {
    setEdgeOpacity(newValue);
    if (helios) {
      helios.edgesGlobalOpacityScale(newValue / 100); // Normalize value (0-100 to 0-1)
      helios.render();
    }
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
          value={nodeSize} // Set the initial value from state
          onChange={handleNodeSizeSlider}
          min={0} // Minimum value for the slider
          max={100} // Maximum value for the slider
          aria-labelledby="size-slider" 
        />
        <Typography variant="body1">Edges</Typography>
        <Slider
          value={edgeOpacity} // Set the initial value from state
          onChange={handleEdgesOpacitySlider}
          min={0} // Minimum value for the slider
          max={100} // Maximum value for the slider
          aria-labelledby="edges-slider" 
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
