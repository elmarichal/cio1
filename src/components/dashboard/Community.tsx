import React, { useState } from 'react';
import { MessageSquare, Users, Video, Search, Filter, Plus, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { forumTopics, conversations, webinars } from '../../utils/data';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forum');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Communauté</h2>
        <p className="text-neutral-600 mt-1">Échange avec d'autres élèves et des professionnels</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'forum'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('forum')}
            >
              <MessageSquare size={16} />
              <span>Forum de discussion</span>
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'mentors'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('mentors')}
            >
              <Users size={16} />
              <span>Mentors</span>
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'webinars'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('webinars')}
            >
              <Video size={16} />
              <span>Webinaires</span>
            </button>
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 input-field w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button className="btn-outline flex items-center space-x-2">
                <Filter size={18} />
                <span>Filtres</span>
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <Plus size={18} />
                <span>Nouveau sujet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === 'forum' && (
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <div key={topic.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-neutral-800 hover:text-primary-600 cursor-pointer">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">
                        Par {topic.author} • {topic.lastActivity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-neutral-600">
                      <span className="flex items-center">
                        <MessageCircle size={16} className="mr-1" />
                        {topic.replies}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp size={16} className="mr-1" />
                        {topic.views}
                      </span>
                      <button className="text-primary-600 hover:text-primary-700">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'mentors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversations.map((conv) => (
                <div key={conv.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={conv.avatar} alt={conv.with} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-800">{conv.with}</h3>
                      <p className="text-sm text-neutral-600 truncate">{conv.lastMessage}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-neutral-500">{conv.timestamp}</span>
                    <button className="btn-primary text-sm py-1.5">
                      Contacter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'webinars' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-neutral-800">{webinar.title}</h3>
                      <p className="text-sm text-neutral-600 mt-1">
                        Par {webinar.presenter}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-neutral-500">
                        <span>{webinar.date}</span>
                        <span>{webinar.time}</span>
                      </div>
                    </div>
                    <button 
                      className={`${
                        webinar.registered 
                          ? 'btn-outline bg-primary-50 text-primary-600' 
                          : 'btn-primary'
                      } text-sm py-1.5`}
                    >
                      {webinar.registered ? 'Inscrit' : "S'inscrire"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;