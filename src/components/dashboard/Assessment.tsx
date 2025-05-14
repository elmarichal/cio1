import React from 'react';
import { Circle, CheckCircle, Clock, Donut as Button, PlayCircle } from 'lucide-react';
import { 
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Radar, Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
import { tests } from '../../utils/data';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

const Assessment: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'in-progress':
        return <Clock size={20} className="text-yellow-500" />;
      case 'not-started':
        return <Circle size={20} className="text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return "Complété";
      case 'in-progress':
        return "En cours";
      case 'not-started':
        return "Non commencé";
      default:
        return "";
    }
  };

  // RIASEC Radar Chart Data
  const riasecData = {
    labels: ['Réaliste', 'Investigateur', 'Artistique', 'Social', 'Entreprenant', 'Conventionnel'],
    datasets: [{
      label: 'Votre profil RIASEC',
      data: [75, 85, 60, 70, 65, 80],
      backgroundColor: 'rgba(0, 119, 182, 0.2)',
      borderColor: '#0077B6',
      pointBackgroundColor: '#0077B6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#0077B6'
    }]
  };

  // Progress Chart Data
  const progressData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Progression',
      data: [10, 25, 30, 40, 55, 68],
      backgroundColor: 'rgba(0, 119, 182, 0.1)',
      borderColor: '#0077B6',
      tension: 0.4,
      fill: true
    }]
  };

  // Orientation Trends Chart Data
  const trendsData = {
    labels: ['Informatique', 'Économie', 'Ingénierie', 'Médecine', 'Sciences', 'Lettres'],
    datasets: [
      {
        label: '2023',
        data: [65, 45, 60, 40, 30, 25],
        backgroundColor: '#0077B6'
      },
      {
        label: '2022',
        data: [55, 48, 55, 45, 35, 30],
        backgroundColor: '#7ABACC'
      }
    ]
  };

  // Fields Pie Chart Data
  const fieldsData = {
    labels: ['Informatique', 'Économie', 'Ingénierie', 'Médecine', 'Sciences', 'Lettres'],
    datasets: [{
      data: [30, 20, 25, 10, 10, 5],
      backgroundColor: [
        '#0077B6',
        '#F48C06',
        '#606C38',
        '#023E8A',
        '#9D4EDD',
        '#E76F51'
      ]
    }]
  };

  // Profile Doughnut Chart Data
  const profileData = {
    datasets: [{
      data: [67, 33],
      backgroundColor: ['#0077B6', '#E9ECEF'],
      borderWidth: 0
    }]
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-neutral-800">Auto-évaluation et découverte de soi</h2>
          <p className="text-neutral-600 mt-1">Découvre tes intérêts, compétences et aspirations professionnelles.</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlayCircle size={18} />
          <span>Passer un nouveau test</span>
        </button>
      </div>

      {/* Test Results Summary */}
      {tests.some(test => test.status === 'completed') && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-4">Résumé de tes résultats</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-neutral-700 mb-2">Domaines d'intérêt principaux</h4>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary">Informatique</span>
                <span className="badge badge-primary">Technologies</span>
                <span className="badge badge-primary">Science</span>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-neutral-700 mb-2">Recommandations de filières</h4>
                <ul className="list-disc list-inside text-neutral-600">
                  {tests.find(test => test.status === 'completed')?.recommendations?.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              {/* Progress Chart */}
              <div className="mt-6">
                <h4 className="font-medium text-neutral-700 mb-2">Progression globale</h4>
                <div className="h-48">
                  <Line 
                    data={progressData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                          ticks: {
                            callback: function(value) {
                              return value + '%';
                            }
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Profile Doughnut Chart */}
              <div className="mt-6">
                <h4 className="font-medium text-neutral-700 mb-2">Profil de compétences</h4>
                <div className="h-48 relative">
                  <Doughnut 
                    data={profileData}
                    options={{
                      cutout: '70%',
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-primary-700 text-2xl">67%</div>
                      <div className="text-sm text-neutral-600">Complété</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0">
              <h4 className="font-medium text-neutral-700 mb-2">Profil RIASEC</h4>
              <div className="h-64">
                <Radar 
                  data={riasecData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      r: {
                        angleLines: {
                          display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                      }
                    }
                  }}
                />
              </div>

              {/* Fields Pie Chart */}
              <div className="mt-6">
                <h4 className="font-medium text-neutral-700 mb-2">Répartition des domaines</h4>
                <div className="h-64">
                  <Pie 
                    data={fieldsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right'
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Orientation Trends */}
              <div className="mt-6">
                <h4 className="font-medium text-neutral-700 mb-2">Tendances d'orientation</h4>
                <div className="h-48">
                  <Bar 
                    data={trendsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top'
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Available Tests */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-4">Tests disponibles</h3>
        
        <div className="space-y-4">
          {tests.map((test) => (
            <div 
              key={test.id} 
              className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    {getStatusIcon(test.status)}
                    <span className={`text-sm font-medium ${
                      test.status === 'completed' ? 'text-green-500' :
                      test.status === 'in-progress' ? 'text-yellow-500' : 'text-gray-500'
                    }`}>
                      {getStatusText(test.status)}
                    </span>
                  </div>
                  <h4 className="font-heading font-medium text-neutral-800">{test.title}</h4>
                  <p className="text-neutral-600 text-sm mt-1">{test.description}</p>
                  
                  {test.status === 'completed' && test.score && (
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500" 
                          style={{ width: `${test.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{test.score}%</span>
                    </div>
                  )}
                </div>
                
                <button className={`px-4 py-2 rounded-md text-sm font-medium ${
                  test.status === 'completed' 
                    ? 'bg-primary-50 text-primary-600 hover:bg-primary-100' 
                    : test.status === 'in-progress'
                    ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                    : 'bg-secondary-500 text-white hover:bg-secondary-600'
                }`}>
                  {test.status === 'completed' ? 'Voir résultats' : 
                   test.status === 'in-progress' ? 'Continuer' : 'Commencer'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;