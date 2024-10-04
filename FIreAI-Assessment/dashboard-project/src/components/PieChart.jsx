import React from 'react';
import Chart from 'react-apexcharts';
import './PieChart.css';

const PieChart = () => {
  const options = {
    labels: ['Electronics', 'Fashion', 'Groceries', 'Books'],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val}%`, 
      },
    },
    legend: {
      position: 'bottom', 
      horizontalAlign: 'center', 
    },
  };

  const series = [44, 55, 41, 67];

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Product Category Distribution</h2>
      <Chart options={options} series={series} type="donut" height="350" />
    </div>
  );
};

export default PieChart;
