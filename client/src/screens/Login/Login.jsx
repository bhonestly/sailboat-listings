import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container" >
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <hr />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  )
}