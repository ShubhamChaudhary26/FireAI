import React from 'react';
import BarChart from '../Components/BarChart'; 
import PieChart from '../components/PieChart';
import UserTable from '../Components/UserTable'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="charts-container">
        <BarChart />  
        <PieChart />  
      </div>
      <UserTable />  
    </div>
  );
};

export default Home;
