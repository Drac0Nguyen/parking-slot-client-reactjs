import React from 'react';

function ParkingTable({ parkingData }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Parking Information</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Slots</th>
            <th>Number of Empty Slots</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parkingData.map((parking, index) => (
            <tr key={index}>
              <td>{parking.name}</td>
              <td>{parking.numSlots}</td>
              <td>{parking.numEmptySlots}</td>
              <td>{parking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParkingTable;
