import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the API (You can use fetch or axios)
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data.users))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ backgroundColor: '#111', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Dummy Data</h1>
      <table style={{ border: '1px solid white', margin: 'auto' }}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>Ip</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img src={user.image} alt="Profile Pic" width="50" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
