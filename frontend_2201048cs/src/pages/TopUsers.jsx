import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then(res => setUsers(res.data));
  }, []);
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Top Users</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <div key={user.userId} className="p-4 border rounded-lg shadow-md flex items-center">
          <img src={`https://source.unsplash.com/50x50/?person`} alt="User" className="rounded-full mr-4" />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p>{user.postCount} Posts</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TopUsers
