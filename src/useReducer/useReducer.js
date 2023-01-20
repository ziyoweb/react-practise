import React, { useEffect, useReducer } from "react";
import axios from "axios";

export default function UserReducer() {
  const ACTIONS = {
    CALL_API: "call-api",
    SUCCESS: "success",
    ERROR: "error",
  };

  const userDetailsReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.CALL_API:
        return {
          ...state,
          loading: true,
        };

      case ACTIONS.SUCCESS:
        return {
          ...state,
          loading: false,
          userDetails: action.data,
        };

      case ACTIONS.ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };

      default: {
        return {
          ...state,
        };
      }
    }
  };

  const initialState = {
    userDetails: "",
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(userDetailsReducer, initialState);
  const { userDetails, loading, error } = state;

  useEffect(() => {
    console.log("useEffect");
    dispatch({ type: ACTIONS.CALL_API });
    const getUsers = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      } catch (err) {
        dispatch({ type: ACTIONS.ERROR, error: err.message });
      }
    };
    getUsers();
  }, []);

  useEffect(() => {}, [userDetails]);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {userDetails &&
            userDetails.map((user) => {
              return (
                <li key={user.id}>
                  <h1>
                    {user.name} ${console.log("render")}
                  </h1>
                  <p>{user.username}</p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
