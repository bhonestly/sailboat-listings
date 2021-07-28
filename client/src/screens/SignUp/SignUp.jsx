import React, { useState } from 'react'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
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
          Email:
        <input
            name="email"
            type="text"
            value={email}
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
        <button>Sign Up</button>
      </form>
    </div>
  )
}
