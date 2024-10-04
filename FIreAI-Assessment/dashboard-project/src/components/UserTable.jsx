import React from 'react';
import './UserTable.css';

const UserTable = () => {
  const users = [
    { name: 'Shubham Chaudhary', email: 'Shubhamchaudhary9974@gmail.com', status: 'Active' },
    { name: 'Lokesh Savkare', email: 'Lokesh@example.com', status: 'Inactive' },
    { name: 'Sahil Phalke', email: 'Sahil@example.com', status: 'Active' },
  ];

  return (
    <div className="user-table-container">
      <h2 className="user-table-title">User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
