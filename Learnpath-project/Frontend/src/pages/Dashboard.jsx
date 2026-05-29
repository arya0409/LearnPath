import React from 'react';
import { Target, User, Rocket, Lightbulb, BookOpen, ExternalLink, Edit } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark flex items-center gap-3">
          <Target className="text-primary" size={32} />
          Career Recommendation Dashboard
        </h2>
        <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Track your progress and discover your learning path.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Profile Summary */}
        <div className="md:col-span-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 h-full overflow-hidden transition-colors">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <User className="text-secondary" size={24} />
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">My Profile</h3>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-slate-700">
                  <span className="text-text-muted-light dark:text-text-muted-dark">Year</span>
                  <span className="font-medium text-text-light dark:text-text-dark">Final Year</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-slate-700">
                  <span className="text-text-muted-light dark:text-text-muted-dark">Branch</span>
                  <span className="font-medium text-text-light dark:text-text-dark">Computer</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-slate-700">
                  <span className="text-text-muted-light dark:text-text-muted-dark">Goal</span>
                  <span className="font-medium text-text-light dark:text-text-dark">Software Engineer</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-primary border border-primary hover:bg-primary-50 dark:hover:bg-slate-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                <Edit size={16} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="md:col-span-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-sm h-full overflow-hidden text-white relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>

            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="text-white" size={28} />
                <h3 className="text-2xl font-bold">Recommended Path</h3>
              </div>

              <p className="text-indigo-100 mb-2">Based on your profile, we recommend:</p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 inline-block self-start">
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {[
                  "Learn HTML, CSS, JavaScript",
                  "Master React & Node.js",
                  "Practice DSA Daily",
                  "Build 5+ Projects",
                  "Prepare for Interviews"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="md:col-span-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 h-full overflow-hidden transition-colors p-6">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="text-yellow-500" size={24} />
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Skills to Learn</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React.js', 'Node.js', 'MongoDB', 'Git & GitHub', 'Problem Solving'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-primary dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-800/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="md:col-span-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 h-full overflow-hidden transition-colors p-6">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="text-green-500" size={24} />
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Learning Resources</h3>
            </div>

            <div className="space-y-3">
              {[
                { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
                { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/' },
                { name: 'Coursera', url: 'https://www.coursera.org/' },
                { name: 'Udemy', url: 'https://www.udemy.com/' },
                { name: 'YouTube Tutorials', url: 'https://www.youtube.com/' },
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 border border-transparent hover:border-gray-100 dark:hover:border-slate-600 transition-all group"
                >
                  <span className="font-medium text-text-light dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {resource.name}
                  </span>
                  <ExternalLink size={16} className="text-text-muted-light dark:text-text-muted-dark group-hover:text-primary dark:group-hover:text-primary-light" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;