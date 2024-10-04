import React from 'react';
import Chart from 'react-apexcharts';
import './BarChart.css';

const BarChart = () => {
  const options = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const series = [{
    name: 'Sales',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 60, 50, 30],
  }];

  return (
    <div className="bar-chart-container">
      <h2 className="bar-chart-title">Sales Over Last 12 Months</h2>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default BarChart;
