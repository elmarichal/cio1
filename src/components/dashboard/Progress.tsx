import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { badges, milestones } from '../../utils/data';

const Progress: React.FC = () => {
  const completedMilestones = milestones.filter(m => m.completed).length;
  const totalMilestones = milestones.length;
  const progressPercentage = (completedMilestones / totalMilestones) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Suivi de progression</h2>
        <p className="text-neutral-600 mt-1">Suivez votre évolution et vos accomplissements</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-primary-50">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-primary-600">Progression globale</span>
              <h3 className="font-heading font-semibold text-lg text-neutral-800 mt-1">
                {progressPercentage.toFixed(0)}% complété
              </h3>
            </div>
            <Target size={24} className="text-primary-500" />
          </div>
          <div className="mt-4">
            <div className="h-2 bg-primary-100 rounded-full">
              <div 
                className="h-full bg-primary-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="card bg-secondary-50">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-secondary-600">Badges obtenus</span>
              <h3 className="font-heading font-semibold text-lg text-neutral-800 mt-1">
                {badges.filter(b => b.earned).length} sur {badges.length}
              </h3>
            </div>
            <Award size={24} className="text-secondary-500" />
          </div>
          <p className="text-neutral-600 text-sm mt-4">
            Continuez à progresser pour débloquer plus de badges !
          </p>
        </div>

        <div className="card bg-accent-50">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm font-medium text-accent-600">Prochaine étape</span>
              <h3 className="font-heading font-semibold text-lg text-neutral-800 mt-1">
                {milestones.find(m => !m.completed)?.title}
              </h3>
            </div>
            <TrendingUp size={24} className="text-accent-500" />
          </div>
          <p className="text-neutral-600 text-sm mt-4">
            Date prévue : {milestones.find(m => !m.completed)?.date}
          </p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="card">
        <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-6">Badges et récompenses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg border ${
                badge.earned 
                  ? 'border-secondary-200 bg-secondary-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${
                  badge.earned ? 'bg-secondary-100' : 'bg-gray-200'
                }`}>
                  <Award size={24} className={badge.earned ? 'text-secondary-600' : 'text-gray-500'} />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">{badge.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{badge.description}</p>
                  {badge.earned && badge.date && (
                    <p className="text-xs text-secondary-600 mt-2">Obtenu le {badge.date}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="card">
        <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-6">Chronologie des étapes</h3>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="relative">
              {index !== milestones.length - 1 && (
                <div className={`absolute left-[1.3rem] top-10 w-0.5 h-full ${
                  milestone.completed ? 'bg-green-200' : 'bg-gray-200'
                }`}></div>
              )}
              <div className="flex items-start space-x-4">
                <div className={`rounded-full p-2 ${
                  milestone.completed 
                    ? 'bg-green-100' 
                    : 'bg-gray-100'
                }`}>
                  {milestone.completed ? (
                    <CheckCircle size={20} className="text-green-500" />
                  ) : (
                    <Clock size={20} className="text-gray-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">{milestone.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{milestone.date}</p>
                  {!milestone.completed && (
                    <div className="flex items-center space-x-2 mt-2">
                      <AlertCircle size={16} className="text-yellow-500" />
                      <span className="text-sm text-yellow-600">En attente</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;