import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Clipboard, BookOpen, BarChart2, GraduationCap, 
  MessageSquare, Briefcase, Award, PieChart, Menu, X, MessageCircle,
  FileText, Rss
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onChangeSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onChangeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'assessment', label: 'Auto-évaluation', icon: Clipboard },
    { id: 'tests', label: 'Tests', icon: FileText },
    { id: 'test-results', label: 'Résultats', icon: PieChart },
    { id: 'newsfeed', label: 'Fil d\'actualité', icon: Rss },
    { id: 'programs', label: 'Filières', icon: GraduationCap },
    { id: 'career', label: 'Projet professionnel', icon: BarChart2 },
    { id: 'resources', label: 'Ressources', icon: BookOpen },
    { id: 'community', label: 'Communauté', icon: MessageSquare },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'jobs', label: 'Marché du travail', icon: Briefcase },
    { id: 'progress', label: 'Suivi', icon: Award },
    { id: 'analysis', label: 'Analyse', icon: PieChart },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChangeSection = (section: string) => {
    onChangeSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-primary-500" />
        ) : (
          <Menu size={24} className="text-primary-500" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white h-full border-r border-gray-200 shadow-sm">
        <div className="p-5 border-b border-gray-200">
          <h2 className="font-heading font-bold text-xl text-neutral-800">
            Menu principal
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onChangeSection(item.id)}
                    className={`flex items-center w-full px-5 py-3 text-left transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                        : 'text-neutral-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent 
                      size={20} 
                      className={`${isActive ? 'text-primary-500' : 'text-neutral-500'} mr-3`} 
                    />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-white shadow-xl md:hidden"
        >
          <div className="p-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-heading font-bold text-xl text-neutral-800">
              Menu principal
            </h2>
            <button onClick={toggleMobileMenu}>
              <X size={24} className="text-neutral-500" />
            </button>
          </div>
          <div className="overflow-y-auto py-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleChangeSection(item.id)}
                      className={`flex items-center w-full px-5 py-4 text-left transition-colors duration-200 ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                          : 'text-neutral-700 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent 
                        size={20} 
                        className={`${isActive ? 'text-primary-500' : 'text-neutral-500'} mr-3`} 
                      />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;