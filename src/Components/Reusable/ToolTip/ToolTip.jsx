

import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const ToolTip = ({ title, className, spanMessage}) => {

  return (
    <Tooltip title={title} arrow>
      <Button className={className}>{spanMessage}</Button>
    </Tooltip>


  );

}

export default ToolTip;