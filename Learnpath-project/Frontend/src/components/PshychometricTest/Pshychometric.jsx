import React, { useState } from "react";
import Questions from "./Questions.json";
import { useNavigate } from "react-router-dom";
import { Brain, ArrowRight } from "lucide-react";

const Pshychometric = () => {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({
    placement: 0,
    masters: 0,
    entrepreneur: 0,
    govt: 0
  });

  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const newScores = {
      placement: scores.placement + option.placement,
      masters: scores.masters + option.masters,
      entrepreneur: scores.entrepreneur + option.entrepreneur,
      govt: scores.govt + option.govt
    };

    setScores(newScores);

    if (current + 1 < Questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/psychometric-result", { state: { scores: newScores } });
    }
  };

  const progress = ((current) / Questions.length) * 100;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <Brain className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">Psychometric Test</h2>
          <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">Discover your ideal career path</p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 w-full bg-gray-100 dark:bg-slate-700">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark tracking-wider uppercase">
                Question {current + 1} of {Questions.length}
              </span>
              <span className="text-sm font-semibold text-primary">
                {Math.round(progress)}% Completed
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-10 text-center leading-tight">
              {Questions[current].question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Questions[current].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(opt)}
                  className="flex items-center justify-between p-4 sm:p-6 text-left border-2 border-gray-200 dark:border-slate-600 rounded-xl hover:border-primary dark:hover:border-primary hover:bg-primary-50 dark:hover:bg-slate-700/50 transition-all group"
                >
                  <span className="font-medium text-text-light dark:text-text-dark group-hover:text-primary dark:group-hover:text-white transition-colors">
                    {opt.text}
                  </span>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-primary dark:group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pshychometric;