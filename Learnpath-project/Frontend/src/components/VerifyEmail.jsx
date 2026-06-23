import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import api from '../api/api';

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('verifying'); // verifying, success, error
  const [message, setMessage] = useState('');
  const hasCalled = useRef(false);

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Invalid or missing email verification token.');
      return;
    }

    if (hasCalled.current) return;
    hasCalled.current = true;

    const verifyToken = async () => {
      try {
        const response = await api.get(`/auth/verify?token=${token}`);
        setStatus('success');
        setMessage(response.data?.message || 'Email verified successfully!');
      } catch (err) {
        setStatus('error');
        setMessage(err.response?.data?.message || 'Verification failed. The token may be invalid or expired.');
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden p-8 text-center animate-fade-in">
          
          {status === 'verifying' && (
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 dark:bg-indigo-950/30 rounded-full mb-6">
                <Loader className="h-8 w-8 text-primary animate-spin" />
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Verifying Email</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Please wait while we verify your email address...
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full mb-6 text-green-600 dark:text-green-400">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Verified Successfully!</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
                {message}
              </p>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 w-full bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Go to Log in
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full mb-6 text-red-600 dark:text-red-400">
                <XCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Verification Failed</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
                {message}
              </p>
              <div className="flex flex-col space-y-3 w-full">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 w-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-text-light dark:text-text-dark font-semibold rounded-xl transition-all"
                >
                  Create New Account
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
