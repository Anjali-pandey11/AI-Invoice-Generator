// src/pages/Register.jsx
import { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await api.post('/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      console.log(res.data);
     navigate('/verify-email', { state: { email: form.email } });
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.07)] w-full max-w-sm p-9">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">
            Create your account
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Welcome! Please fill in the details to get started.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg px-3 py-2.5 mb-5">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Full name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-150 focus:border-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/8"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-150 focus:border-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/8"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-150 focus:border-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/8"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-zinc-900 hover:bg-zinc-700 disabled:bg-zinc-400 text-white text-sm font-medium rounded-lg transition-colors duration-150 mt-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Continue'}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-500 mt-5">
          Already have an account?{' '}
          <a href="/login" className="text-zinc-900 font-medium hover:underline">
            Sign in
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;