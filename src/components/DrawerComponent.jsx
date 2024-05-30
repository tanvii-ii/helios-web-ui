import React, { useState, useEffect  } from 'react';
import { Toolbar, IconButton, Typography, Drawer, Divider, Slider, FormControl, FormControlLabel, Radio } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerComponent = ({ helios }) => {
  const [open, setOpen] = useState(false);
  const [nodeSize, nodeSizeSliderValue] = useState(50);  
  const [edgeOpacity, setEdgeOpacity] = useState(50);
  const [selectedBackgroundMode, setSelectedBackgroundMode] = useState('white'); 
  const [selectedBlendingMode, setSelectedBlendingMode] = useState('normal'); 
  const [selectedNodesMode, setSelectedNodesMode] = useState('flat');


  const handleBackgroundModeChange = (event) => {
    setSelectedBackgroundMode(event.target.value);
  };

  const handleBlendingModeChange = (event) => {
    setSelectedBlendingMode(event.target.value);
  };

  const handleNodesModeChange = (event) => {
    setSelectedNodesMode(event.target.value);
  };

  const backgroundModeOptions = [
    { value: 'white', label: 'White' },
    { value: 'dark', label: 'Dark' },
  ];

  const blendingModeOptions = [
    { value: 'normal', label: 'Normal' },
    { value: 'additive', label: 'Additive' }, // Only applicable with dark background
  ];

  const nodesModeOptions = [
    { value: 'flat', label: 'Flat' },
    { value: 'shaded', label: 'Shaded' },
  ];

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

  // Update helios based on background color, nodes mode, blending mode change
  useEffect(() => {
    if (helios) {
      const backgroundColors = {
        white: [255, 255, 255, 1.0],
        dark: [0, 0, 0, 1.0],
      };
      helios.backgroundColor(backgroundColors[selectedBackgroundMode]);

      const enableAdditiveBlending = selectedBlendingMode === 'additive' && selectedBackgroundMode === 'dark';
      helios.additiveBlending(enableAdditiveBlending);

      helios.shadedNodes(selectedNodesMode === 'shaded');

      helios.render();
    }
  }, [selectedBackgroundMode, selectedBlendingMode, selectedNodesMode, helios]);

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
        <Typography variant="body1">Background Mode</Typography>
        <FormControl>
          {backgroundModeOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              control={<Radio checked={selectedBackgroundMode === option.value} />}
              label={option.value}
              value={option.value}
              onChange={handleBackgroundModeChange}
            />
          ))}
        </FormControl>
        <Typography variant="body1">Blending Mode</Typography>
        <FormControl>
          {blendingModeOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              control={<Radio
                checked={selectedBlendingMode === option.value}
                disabled={selectedBackgroundMode !== 'dark'} // Disable radio button if not dark mode
              />}
              label={option.value}
              value={option.value}
              onChange={handleBlendingModeChange}
            />
          ))}
        </FormControl>
        <Typography variant="body1">Nodes Mode</Typography>
        <FormControl>
          {nodesModeOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              control={<Radio checked={selectedNodesMode === option.value} />}
              label={option.value}
              value={option.value}
              onChange={handleNodesModeChange}
            />
          ))}
        </FormControl>
        {/* Add more settings components here */}
      </Drawer>
      <IconButton onClick={handleDrawerOpen} size="large" sx={{ position: 'absolute', top: 10, right: 10 }}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
