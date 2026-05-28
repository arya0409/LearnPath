import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cog6ToothIcon as Settings, BookOpenIcon as BookOpen, AcademicCapIcon as GraduationCap, MapPinIcon as Target } from '@heroicons/react/24/outline';

const Profilesetup = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    year: '',
    branch: '',
    goal: ''
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data:", formData);

    if (formData.goal === "not_decided") {
      navigate("/psychometric-test");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">

          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center">
            <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Settings size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">Complete Your Profile</h3>
            <p className="text-indigo-100 mt-1 text-sm">Tell us about yourself to personalize your experience</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">

            {/* Year */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark">
                <BookOpen size={16} className="text-primary" />
                Academic Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              >
                <option value="">Select year</option>
                <option value="1st year">1st year</option>
                <option value="2nd year">2nd year</option>
                <option value="3rd year">3rd year</option>
                <option value="4th year">4th year</option>
              </select>
            </div>

            {/* Branch */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark">
                <GraduationCap size={16} className="text-primary" />
                Branch
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              >
                <option value="">Select Branch</option>
                <option value="Computer">Computer</option>
                <option value="IT">IT</option>
                <option value="ENTC">ENTC</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Electrical">Electrical</option>
              </select>
            </div>

            {/* Goal */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-text-light dark:text-text-dark">
                <Target size={16} className="text-primary" />
                Career Goal
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              >
                <option value="">Select Goal</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Startup">Startup</option>
                <option value="Higher Studies">Higher Studies</option>
                <option value="not_decided">Not Decided</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 mt-4"
            >
              Continue to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profilesetup;