import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AlertCircle } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="text-primary" size={32} />
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">My Profile</h2>
      </div>

      <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
        Welcome to LearnPath 👋
      </p>

      {/* Modal / Popup */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-primary">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                  Complete Your Profile
                </h3>
              </div>

              <p className="text-text-muted-light dark:text-text-dark mb-8">
                To get personalized career guidance, please complete your profile. This will help us tailor the experience exactly to your needs.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShow(false);
                    navigate('/profile-setup');
                  }}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
                >
                  Let's Start
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;