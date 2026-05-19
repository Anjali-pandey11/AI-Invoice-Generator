// src/pages/VerifyEmail.jsx
import { useState } from 'react';
import api from '../utils/api';
import { useNavigate, useLocation } from 'react-router';

function VerifyEmail() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Register ya Login dono se email pass karo state mein
  const email = location.state?.email || '';

  // Har box mein sirf 1 digit
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Agle box pe auto-focus
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Backspace pe pichle box pe jaao
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Paste support
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = [...otp];
    pasted.split('').forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    const lastIndex = Math.min(pasted.length, 5);
    document.getElementById(`otp-${lastIndex}`).focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const otpString = otp.join('');

    if (otpString.length < 6) {
      setError('Please enter the complete 6-digit OTP.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.post('/auth/verify-email', {
        email,
        otp: otpString,
      });

      // Token save karo aur dashboard pe jaao
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      const message = err.response?.data?.message;
      if (err.response?.status === 400) {
        setError(message || 'Invalid or expired OTP.');
      } else {
        setError(message || 'Verification failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // OTP dobara bhejo
  const handleResend = async () => {
    setResendMsg('');
    setError('');
    setResendLoading(true);
    try {
      await api.post('/auth/resend-otp', { email });
      setResendMsg('A new OTP has been sent to your email.');
      setOtp(['', '', '', '', '', '']);
      document.getElementById('otp-0').focus();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.07)] w-full max-w-sm p-9">

        {/* Header */}
        <div className="mb-6">
          {/* Email icon */}
          <div className="w-11 h-11 bg-zinc-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">
            Check your email
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            We sent a 6-digit OTP to{' '}
            <span className="font-medium text-zinc-700">{email || 'your email'}</span>.
            Enter it below to verify your account.
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

        {/* Resend success */}
        {resendMsg && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg px-3 py-2.5 mb-5">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{resendMsg}</span>
          </div>
        )}

        {/* OTP Boxes */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 justify-between mb-6" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-11 h-12 text-center text-lg font-semibold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg outline-none transition-all duration-150 focus:border-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-900/8 caret-transparent"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-zinc-900 hover:bg-zinc-700 disabled:bg-zinc-400 text-white text-sm font-medium rounded-lg transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Verify email'}
          </button>
        </form>

        {/* Resend */}
        <p className="text-center text-sm text-zinc-500 mt-5">
          Didn't receive the code?{' '}
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className="text-zinc-900 font-medium hover:underline disabled:text-zinc-400 disabled:no-underline bg-transparent border-none cursor-pointer p-0"
          >
            {resendLoading ? 'Sending...' : 'Resend OTP'}
          </button>
        </p>

      </div>
    </div>
  );
}

export default VerifyEmail;