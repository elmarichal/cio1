import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Pie, Radar } from 'react-chartjs-2';

interface TestData {
  name: string;
  age: string;
  interests: string[];
  personality: string;
  communication: string;
  leadership: string;
  stress: string;
  [key: string]: any;
}

const TestResults: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<TestData | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('testResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-xl font-heading font-bold text-neutral-800 mb-2">
          Aucun résultat disponible
        </h2>
        <p className="text-neutral-600 mb-4">
          Veuillez d'abord compléter le test de personnalité.
        </p>
        <button
          onClick={() => navigate('/dashboard/tests')}
          className="btn-primary"
        >
          Passer le test
        </button>
      </div>
    );
  }

  const personalityData = {
    labels: ['Communication', 'Leadership', 'Gestion du stress'],
    datasets: [
      {
        label: 'Scores',
        data: [
          parseInt(results.communication),
          parseInt(results.leadership),
          parseInt(results.stress)
        ],
        backgroundColor: 'rgba(0, 119, 182, 0.2)',
        borderColor: 'rgba(0, 119, 182, 1)',
        borderWidth: 2,
      },
    ],
  };

  const interestsData = {
    labels: results.interests,
    datasets: [
      {
        data: results.interests.map(() => 1),
        backgroundColor: [
          '#0077B6',
          '#F48C06',
          '#606C38',
          '#023E8A',
          '#9D4EDD',
          '#E76F51',
          '#2A9D8F',
          '#E63946',
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-neutral-800">Résultats du test</h2>
          <p className="text-neutral-600 mt-1">Analyse détaillée de votre profil</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/tests')}
          className="btn-outline flex items-center space-x-2"
        >
          <ArrowLeft size={18} />
          <span>Retour au test</span>
        </button>
      </div>

      {/* Overview Card */}
      <div className="card">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-primary-600" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg text-neutral-800">
              {results.name}
            </h3>
            <p className="text-neutral-600">
              {results.age} ans • {results.education}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-50 rounded-lg p-4">
            <h4 className="font-medium text-neutral-800 mb-2">Style de travail</h4>
            <p className="text-neutral-600">{results.workStyle}</p>
          </div>
          <div className="bg-secondary-50 rounded-lg p-4">
            <h4 className="font-medium text-neutral-800 mb-2">Disponibilité</h4>
            <p className="text-neutral-600">{results.schedule}</p>
          </div>
          <div className="bg-accent-50 rounded-lg p-4">
            <h4 className="font-medium text-neutral-800 mb-2">Langues</h4>
            <p className="text-neutral-600">{results.languages?.join(', ') || 'Non spécifié'}</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-heading font-semibold text-lg mb-4">Traits de personnalité</h3>
          <div className="h-64">
            <Radar
              data={personalityData}
              options={{
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 10,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="card">
          <h3 className="font-heading font-semibold text-lg mb-4">Centres d'intérêt</h3>
          <div className="h-64">
            <Pie
              data={interestsData}
              options={{
                plugins: {
                  legend: {
                    position: 'right',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="card">
        <h3 className="font-heading font-semibold text-lg mb-4">Analyse détaillée</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-neutral-800 mb-2">Forces</h4>
            <ul className="list-disc list-inside text-neutral-600">
              {parseInt(results.communication) >= 7 && (
                <li>Excellentes capacités de communication</li>
              )}
              {parseInt(results.leadership) >= 7 && (
                <li>Fort potentiel de leadership</li>
              )}
              {parseInt(results.stress) >= 7 && (
                <li>Bonne gestion du stress</li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-800 mb-2">Axes d'amélioration</h4>
            <ul className="list-disc list-inside text-neutral-600">
              {parseInt(results.communication) < 7 && (
                <li>Développer les compétences en communication</li>
              )}
              {parseInt(results.leadership) < 7 && (
                <li>Renforcer les capacités de leadership</li>
              )}
              {parseInt(results.stress) < 7 && (
                <li>Améliorer la gestion du stress</li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-800 mb-2">Recommandations</h4>
            <p className="text-neutral-600">
              Basé sur votre profil, nous vous recommandons d'explorer les domaines suivants :
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {results.interests.map((interest: string) => (
                <span key={interest} className="badge badge-primary">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => navigate('/dashboard/tests')}
          className="btn-outline"
        >
          Refaire le test
        </button>
        <button className="btn-primary">
          Télécharger le rapport
        </button>
      </div>
    </div>
  );
};

export default TestResults;