import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/actions.js";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  // The state.user refers to the slice of the Redux state managed by the userReducer
  const dispatch = useDispatch(); // dispatch: Used to send Redux actions, such as loginUser, to the store.
  const { loading } = useSelector((state) => state.data); // useSelector: Accesses specific parts of the Redux state

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    
    </div>
  );
};

export default Login;

/* credentials is passed as the body of the POST request to the https://dummyjson.com/user/login endpoint.
It contains the required information (e.g., username and password) that the API uses to authenticate the user. */
