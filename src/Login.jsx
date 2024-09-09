import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import the Firebase config
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Logged in successfully
      console.log('Logged in as:', userCredential.user);
      navigate('/home');
      toast.success("Login Sucessful !!")
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] group/design-root items-center overflow-x-hidden"
      style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f1e7] px-10 py-3" />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#1c190d] tracking-light text-[32px] font-bold leading-tight">
                  Welcome to our platform
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Personalized comedy shows and kids' music
                </p>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c190d] text-base font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c190d] focus:outline-0 focus:ring-0 border-none bg-[#f4f1e7] focus:border-none h-14 placeholder:text-[#9c8d49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1c190d] text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c190d] focus:outline-0 focus:ring-0 border-none bg-[#f4f1e7] focus:border-none h-14 placeholder:text-[#9c8d49] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              {error && <p className="text-red-600 px-4">{error}</p>}
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#f5d33d] text-[#1c190d] text-base font-bold leading-normal tracking-[0.015em]"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <span className="truncate">Log in</span>
                  )}
                </button>
              </div>
            </form>
            <p className="text-[#9c8d49] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #f5d33d;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;
