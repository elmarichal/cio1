import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Settings, Search, Compass } from 'lucide-react';
import { notifications } from '../../utils/data';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const unreadNotificationsCount = notifications.filter(notification => !notification.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reminder':
        return <div className="bg-primary-100 p-2 rounded-full"><Bell size={16} className="text-primary-500" /></div>;
      case 'achievement':
        return <div className="bg-secondary-100 p-2 rounded-full"><Bell size={16} className="text-secondary-500" /></div>;
      case 'message':
        return <div className="bg-accent-100 p-2 rounded-full"><Bell size={16} className="text-accent-500" /></div>;
      default:
        return <div className="bg-gray-100 p-2 rounded-full"><Bell size={16} className="text-gray-500" /></div>;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-2">
      <div className="px-4 md:px-6 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-2 mr-8">
            <Compass size={24} className="text-primary-500" />
            <span className="font-heading font-bold text-xl text-neutral-800">TunisOrientation</span>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-64" 
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={toggleNotifications} 
              className="relative p-2 text-gray-500 hover:text-primary-500 transition-colors duration-300"
              aria-label="Notifications"
            >
              <Bell size={20} />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-secondary-500 rounded-full">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
                <div className="p-3 border-b border-gray-200">
                  <h3 className="font-heading font-semibold text-neutral-800">Notifications</h3>
                </div>
                <div>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 flex items-start space-x-3 ${
                          !notification.read ? 'bg-primary-50' : ''
                        }`}
                      >
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <p className="font-medium text-sm text-neutral-800">{notification.title}</p>
                          <p className="text-xs text-neutral-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-neutral-500 mt-1">{notification.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-neutral-600">
                      Aucune notification pour le moment
                    </div>
                  )}
                </div>
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 p-1">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button 
              onClick={toggleUserMenu}
              className="flex items-center space-x-2"
              aria-label="Menu utilisateur"
            >
              <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                <User size={20} />
              </div>
              <span className="hidden md:inline-block font-medium text-neutral-800">Ahmed</span>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
                <div className="py-1">
                  <button 
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <User size={18} className="mr-2" />
                    <span>Profil</span>
                  </button>
                  <button 
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Settings size={18} className="mr-2" />
                    <span>Paramètres</span>
                  </button>
                  <hr className="my-1" />
                  <button 
                    className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} className="mr-2" />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;