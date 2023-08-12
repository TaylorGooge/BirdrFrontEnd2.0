import React, { useEffect, useState } from 'react';

import Chart from "react-apexcharts";


const PieChart = (props) => {
  return(

    <Chart
      options={props.data['options']}
      labels={props.data['labels']}
      series={props.data['series']}
      type="donut"
      width="500"
    />

  );
};
export default PieChart;