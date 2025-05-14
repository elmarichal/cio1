import React, { useState } from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import Assessment from '../components/dashboard/Assessment';
import Programs from '../components/dashboard/Programs';
import Resources from '../components/dashboard/Resources';
import Profile from '../components/dashboard/Profile';
import Career from '../components/dashboard/Career';
import Community from '../components/dashboard/Community';
import Jobs from '../components/dashboard/Jobs';
import Progress from '../components/dashboard/Progress';
import Analysis from '../components/dashboard/Analysis';

const DashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('assessment');
  
  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'assessment':
        return <Assessment />;
      case 'programs':
        return <Programs />;
      case 'career':
        return <Career />;
      case 'resources':
        return <Resources />;
      case 'community':
        return <Community />;
      case 'jobs':
        return <Jobs />;
      case 'progress':
        return <Progress />;
      case 'analysis':
        return <Analysis />;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
              Section en développement
            </h2>
            <p className="text-neutral-600">
              Cette section sera bientôt disponible. Merci de votre patience.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <div className="flex-grow flex">
        <Sidebar 
          activeSection={activeSection} 
          onChangeSection={setActiveSection} 
        />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;