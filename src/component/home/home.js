// HomePage.js
import React from 'react';
import ParkingTable from '../../model/parking-table';
import './HomePage.css';
import Header from '../header-page/header'; 
import Footer from '../footer-page/footer'; 
function HomePage() {

  // Sample data, replace with actual data from your API or state
  const parkingData = [
    { name: 'Parking 1', numSlots: 100, numEmptySlots: 50, status: 'Available' },
    { name: 'Parking 2', numSlots: 150, numEmptySlots: 100, status: 'Full' }
    // Add more parking data as needed
  ];

  return (
    <div className="home-page-container">
      <Header /> 
      <div className="parking-table-container">
        <ParkingTable parkingData={parkingData} />
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default HomePage;
