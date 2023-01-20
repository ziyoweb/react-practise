import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [userDetails, setUserdetails] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserdetails(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getUsers();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {userDetails?.map((user) => (
            <li key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
