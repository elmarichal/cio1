import React, { useState } from 'react';
import { 
  BarChart2, Target, Calendar, CheckCircle, Clock, 
  AlertCircle, ChevronRight, Download, ExternalLink 
} from 'lucide-react';
import { careers, milestones } from '../../utils/data';

const Career: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState(careers[0]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Projet professionnel</h2>
        <p className="text-neutral-600 mt-1">Planifie et suis l'évolution de ton projet professionnel</p>
      </div>

      {/* Career Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-primary-50 border-l-4 border-primary-500">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-primary-600">Objectif principal</span>
              <h3 className="font-heading font-semibold text-lg text-neutral-800 mt-1">
                Devenir Développeur Web
              </h3>
            </div>
            <Target size={24} className="text-primary-500" />
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-neutral-600 mb-1">
              <span>Progression</span>
              <span>65%</span>
            </div>
            <div className="h-2 bg-primary-100 rounded-full">
              <div className="h-full w-[65%] bg-primary-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="card bg-secondary-50 border-l-4 border-secondary-500">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-secondary-600">Prochaine échéance</span>
              <h3 className="font-heading font-semibold text-lg text-neutral-800 mt-1">
                Inscription université
              </h3>
            </div>
            <Calendar size={24} className="text-secondary-500" />
          </div>
          <p className="text-neutral-600 text-sm mt-4">
            Date limite : 15 juillet 2025
          </p>
        </div>

        <div className="card bg-accent-50 border-l-4 border-accent-500">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-accent-600">Compétences clés</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="badge badge-accent">HTML/CSS</span>
                <span className="badge badge-accent">JavaScript</span>
                <span className="badge badge-accent">React</span>
              </div>
            </div>
            <BarChart2 size={24} className="text-accent-500" />
          </div>
        </div>
      </div>

      {/* Timeline and Career Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="font-heading font-semibold text-lg mb-4">Étapes clés</h3>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start space-x-3">
                  {milestone.completed ? (
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Clock size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium text-neutral-800">{milestone.title}</p>
                    <p className="text-sm text-neutral-600">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full btn-outline mt-4">
              Ajouter une étape
            </button>
          </div>
        </div>

        {/* Career Details */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800">
                  {selectedCareer.title}
                </h3>
                <p className="text-neutral-600 mt-1">{selectedCareer.sector}</p>
              </div>
              <div className="flex space-x-2">
                <button className="btn-outline py-1.5 px-3 text-sm flex items-center space-x-1">
                  <Download size={16} />
                  <span>Fiche métier</span>
                </button>
                <button className="btn-primary py-1.5 px-3 text-sm flex items-center space-x-1">
                  <ExternalLink size={16} />
                  <span>Explorer</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-neutral-800 mb-2">Description</h4>
                <p className="text-neutral-600">{selectedCareer.description}</p>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-2">Compétences requises</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.skills.map((skill, index) => (
                    <span key={index} className="badge badge-primary">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-2">Formation recommandée</h4>
                <ul className="list-disc list-inside text-neutral-600 space-y-1">
                  {selectedCareer.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-2">Salaire indicatif</h4>
                <p className="text-neutral-600">{selectedCareer.salary}</p>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="card bg-primary-50">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-neutral-800">Prochaines actions</h4>
                  <p className="text-sm text-neutral-600 mt-1">3 tâches à compléter</p>
                </div>
                <ChevronRight size={20} className="text-primary-500" />
              </div>
            </div>

            <div className="card bg-yellow-50">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-neutral-800">Recommandations</h4>
                  <p className="text-sm text-neutral-600 mt-1">2 nouvelles suggestions</p>
                </div>
                <AlertCircle size={20} className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;