import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp, Users, BookOpen, Brain } from 'lucide-react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analysis: React.FC = () => {
  // Sample data for charts
  const performanceData = {
    labels: ['Sciences', 'Mathématiques', 'Langues', 'Sciences Sociales', 'Technologies'],
    datasets: [{
      label: 'Performance par matière',
      data: [85, 78, 92, 88, 95],
      backgroundColor: [
        'rgba(0, 119, 182, 0.6)',
        'rgba(244, 140, 6, 0.6)',
        'rgba(96, 108, 56, 0.6)',
        'rgba(0, 150, 199, 0.6)',
        'rgba(255, 183, 3, 0.6)',
      ],
      borderColor: [
        'rgba(0, 119, 182, 1)',
        'rgba(244, 140, 6, 1)',
        'rgba(96, 108, 56, 1)',
        'rgba(0, 150, 199, 1)',
        'rgba(255, 183, 3, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const progressionData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Progression moyenne',
      data: [65, 70, 75, 72, 80, 85],
      fill: false,
      borderColor: 'rgba(0, 119, 182, 1)',
      tension: 0.4,
    }],
  };

  const skillsData = {
    labels: ['Analyse', 'Communication', 'Travail d\'équipe', 'Organisation', 'Créativité'],
    datasets: [{
      data: [85, 75, 90, 80, 70],
      backgroundColor: [
        'rgba(0, 119, 182, 0.6)',
        'rgba(244, 140, 6, 0.6)',
        'rgba(96, 108, 56, 0.6)',
        'rgba(0, 150, 199, 0.6)',
        'rgba(255, 183, 3, 0.6)',
      ],
      borderColor: [
        'rgba(0, 119, 182, 1)',
        'rgba(244, 140, 6, 1)',
        'rgba(96, 108, 56, 1)',
        'rgba(0, 150, 199, 1)',
        'rgba(255, 183, 3, 1)',
      ],
    }],
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Analyse de performance</h2>
        <p className="text-neutral-600 mt-1">Visualisez et analysez vos performances académiques</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card bg-primary-50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-primary-600">Moyenne générale</span>
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mt-1">85%</h3>
            </div>
            <TrendingUp size={24} className="text-primary-500" />
          </div>
        </div>

        <div className="card bg-secondary-50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-secondary-600">Tests complétés</span>
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mt-1">12</h3>
            </div>
            <Brain size={24} className="text-secondary-500" />
          </div>
        </div>

        <div className="card bg-accent-50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-accent-600">Ressources consultées</span>
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mt-1">45</h3>
            </div>
            <BookOpen size={24} className="text-accent-500" />
          </div>
        </div>

        <div className="card bg-primary-50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-primary-600">Rang de classe</span>
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mt-1">3/28</h3>
            </div>
            <Users size={24} className="text-primary-500" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance by Subject */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-semibold text-lg text-neutral-800">
              Performance par matière
            </h3>
            <BarChart size={20} className="text-neutral-500" />
          </div>
          <div className="h-80">
            <Bar 
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Progress Over Time */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-semibold text-lg text-neutral-800">
              Progression dans le temps
            </h3>
            <LineChart size={20} className="text-neutral-500" />
          </div>
          <div className="h-80">
            <Line 
              data={progressionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Skills Analysis */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-semibold text-lg text-neutral-800">
              Analyse des compétences
            </h3>
            <PieChart size={20} className="text-neutral-500" />
          </div>
          <div className="h-80">
            <Pie 
              data={skillsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Recommendations */}
        <div className="card">
          <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-6">
            Recommandations d'amélioration
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-50 rounded-lg">
              <h4 className="font-medium text-neutral-800">Forces</h4>
              <ul className="mt-2 space-y-2 text-neutral-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Excellente performance en Technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Bon niveau en Langues</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-secondary-50 rounded-lg">
              <h4 className="font-medium text-neutral-800">Axes d'amélioration</h4>
              <ul className="mt-2 space-y-2 text-neutral-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span>Renforcer les compétences en Mathématiques</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span>Développer la créativité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;