import React, { useState } from 'react';
import { Table as Tabs, BookOpen, Video, FileText, Play, Pause, ChevronRight, Clock } from 'lucide-react';
import { resources } from '../../utils/data';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video size={16} />;
      case 'guide':
        return <FileText size={16} />;
      case 'article':
        return <BookOpen size={16} />;
      default:
        return null;
    }
  };
  
  const getResourceTypeClass = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-100 text-red-700';
      case 'guide':
        return 'bg-blue-100 text-blue-700';
      case 'article':
        return 'bg-green-100 text-green-700';
      default:
        return '';
    }
  };
  
  const getResourceTypeText = (type: string) => {
    switch (type) {
      case 'video':
        return 'Vidéo';
      case 'guide':
        return 'Guide';
      case 'article':
        return 'Article';
      default:
        return '';
    }
  };

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Ressources éducatives</h2>
        <p className="text-neutral-600 mt-1">Accède à des contenus pédagogiques pour enrichir tes connaissances.</p>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'all'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('all')}
            >
              Tous les contenus
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center ${
                activeTab === 'video'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('video')}
            >
              <Video size={16} className="mr-1" />
              Vidéos
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center ${
                activeTab === 'guide'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('guide')}
            >
              <FileText size={16} className="mr-1" />
              Guides
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center ${
                activeTab === 'article'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('article')}
            >
              <BookOpen size={16} className="mr-1" />
              Articles
            </button>
          </nav>
        </div>
        
        {/* Content Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-40 bg-gray-200 overflow-hidden">
                  <img 
                    src={resource.thumbnail} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                      <span 
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getResourceTypeClass(resource.type)}`}
                      >
                        {getResourceTypeIcon(resource.type)}
                        <span className="ml-1">{getResourceTypeText(resource.type)}</span>
                      </span>
                      
                      {resource.type === 'video' && (
                        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-primary-600 hover:text-primary-700">
                          <Play size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {resource.progress !== undefined && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                      <div 
                        className="h-full bg-primary-500" 
                        style={{ width: `${resource.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-heading font-medium text-neutral-800 line-clamp-2">{resource.title}</h3>
                  
                  <div className="flex items-center justify-between mt-3">
                    {resource.duration && (
                      <span className="text-sm text-neutral-500 flex items-center">
                        <Clock size={14} className="mr-1" />
                        {resource.duration}
                      </span>
                    )}
                    
                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      <span>Voir</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-8">
              <p className="text-neutral-600">Aucune ressource disponible dans cette catégorie.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Featured Content */}
      <div className="bg-primary-50 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <h3 className="font-heading font-semibold text-lg text-neutral-800">Contenus recommandés pour toi</h3>
          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
            <span>Voir tous les contenus recommandés</span>
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.slice(0, 3).map((resource) => (
            <div 
              key={resource.id} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-gray-200 relative">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span 
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getResourceTypeClass(resource.type)}`}
                  >
                    {getResourceTypeIcon(resource.type)}
                    <span className="ml-1">{getResourceTypeText(resource.type)}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-3 flex-1 flex flex-col">
                <h4 className="font-medium text-neutral-800 text-sm line-clamp-2 mb-2">{resource.title}</h4>
                
                <div className="mt-auto flex justify-between items-center">
                  {resource.progress !== undefined && (
                    <div className="flex items-center space-x-2 text-xs text-neutral-600">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500" 
                          style={{ width: `${resource.progress}%` }}
                        ></div>
                      </div>
                      <span>{resource.progress}%</span>
                    </div>
                  )}
                  
                  <button className="text-xs text-primary-600 font-medium">
                    Continuer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;