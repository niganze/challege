import React, { useState } from 'react';
  import "./Login.css"


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"id="password" name="password" value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;

