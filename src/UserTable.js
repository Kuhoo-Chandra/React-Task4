import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'; 


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users); // Access the 'users' array in the response
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th style={{ width: "320px" }}>Phone</th>
          <th>Username</th>
          <th style={{ width: "200px" }}>Birthdate</th> 
          <th>Image</th>
          <th>Blood Group</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Eye Color</th>
          <th>Hair Color</th>
          <th>Hair Type</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.birthDate}</td>
            <td><img
                src={user.image}
                alt={`User ${user.id}`}
                style={{ maxWidth: '50px', maxHeight: '50px' }} 
               /></td>
            <td>{user.bloodGroup}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{user.eyeColor}</td>
            <td>{user.hair.color}</td>
            <td>{user.hair.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;