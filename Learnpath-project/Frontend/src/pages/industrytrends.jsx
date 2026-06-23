import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';

//  Import local JSON
import trendsData from './response.json';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
//new domain data

const domainData = {
  CSE: {
    skills: ["AI/ML", "Web Development", "Cloud", "Cybersecurity"],
    careers: ["Software Engineer", "Data Scientist", "DevOps Engineer"]
  },

  Mechanical: {
    skills: ["CAD", "SolidWorks", "Automation", "Manufacturing"],
    careers: ["Design Engineer", "Production Engineer", "Automobile Engineer"]
  },

  Civil: {
    skills: ["AutoCAD", "STAAD Pro", "Project Management", "Surveying"],
    careers: ["Site Engineer", "Structural Engineer", "Govt Engineer"]
  },

  ENTC: {
    skills: ["Embedded Systems", "VLSI", "IoT", "PCB Design"],
    careers: ["Embedded Engineer", "VLSI Engineer", "IoT Developer"]
  },

  Electrical: {
    skills: ["Power Systems", "PLC", "Automation", "Control Systems"],
    careers: ["Electrical Engineer", "Automation Engineer", "PSU Engineer"]
  }
};
const departmentKeywords = {
  All: [],

  CSE: ["AI", "Software", "Cloud", "Cybersecurity"],

  Mechanical: ["Robotics", "Automation", "Electric Vehicle", "Manufacturing"],

  Civil: ["Construction", "Infrastructure", "Smart City", "Sustainability"],

  ENTC: ["IoT", "Semiconductor", "VLSI", "5G"],

  Electrical: ["Renewable Energy", "Power Systems", "Battery", "Smart Grid"]
};
const IndustryTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  //  Replace API call with local data
  const fetchTrends = () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate loading delay (optional)
      setTimeout(() => {
        const shuffled = shuffleArray(trendsData.articles);
        setTrends(shuffled);
        setLastUpdated(new Date());
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load local data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  // for advancments
const filteredTrends =
  selectedDepartment === "All"
    ? trends
    : trends.filter((trend) =>
        departmentKeywords[selectedDepartment].some((keyword) =>
          (
            trend.title + " " + trend.description
          )
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      );
  return (
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Emerging Tech Trends</h1>
          </div>
          <button
            onClick={fetchTrends}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
        {/* Department Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Department
          </label>
          <select
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="CSE">CSE / IT</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="ENTC">ENTC</option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>
  
        {/* Last Updated */}
        {lastUpdated && (
          <p className="text-sm text-gray-600 mb-6">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
  
        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Error loading trends</h3>
              <p className="text-red-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}
  
        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        )}
  
        {/* Trends Grid */}
        {!loading && trends.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.map((trend, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow mb-4">
                {/* Image */}
                {trend.urlToImage && (
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={trend.urlToImage}
                      alt={trend.title}
                      className="w-full h-full object-cover"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        width: "100%"
                      }}
                    />
                  </div>
                )}
  
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                      {trend.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {trend.description}
                    </p>
                  </div>
  
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="font-medium">{trend.source?.name}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(trend.publishedAt)}</span>
                      </div>
                    </div>
    
                    {/* Read More Link */}
                    <a
                      href={trend.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
  
        {/* Empty State */}
        {!loading && !error && trends.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No trends found for selected department</h3>
            <p className="text-sm text-gray-500">
              No global trends available for {selectedDepartment}
            </p>
          </div>
        )}
      </div>
    );
  };

export default IndustryTrends;