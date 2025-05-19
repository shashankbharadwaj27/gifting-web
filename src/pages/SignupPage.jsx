import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const SignupPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Create Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <InputField label="Username" type="text" name="username" value={form.username} onChange={handleChange} />
          <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
          <InputField label="Phone Number" type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
          <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-blue-600 font-semibold cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
