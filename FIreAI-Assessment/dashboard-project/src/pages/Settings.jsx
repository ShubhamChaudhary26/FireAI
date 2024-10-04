import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="form-container">
        <h2>Update User Details</h2>
        <form className="settings-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="status">Status:</label>
          <select id="status" name="status" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
