import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, School, Calendar, Edit2, Camera, Save } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ahmed Ben Ali',
    email: 'ahmed.benali@email.com',
    phone: '+216 71 234 567',
    address: 'Tunis, Tunisie',
    school: 'Lycée Pilote de l\'Ariana',
    birthDate: '2007-05-15',
    bio: 'Élève passionné par les sciences et la technologie, je cherche à poursuivre mes études dans le domaine de l\'ingénierie informatique.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-heading font-bold text-neutral-800">Mon Profil</h2>
          <p className="text-neutral-600 mt-1">Gérez vos informations personnelles et vos préférences</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`btn-primary flex items-center space-x-2 ${isEditing ? 'bg-secondary-500 hover:bg-secondary-600' : ''}`}
        >
          {isEditing ? (
            <>
              <Save size={18} />
              <span>Enregistrer</span>
            </>
          ) : (
            <>
              <Edit2 size={18} />
              <span>Modifier</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture Section */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center">
                  <User size={64} className="text-primary-600" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
                    <Camera size={20} className="text-primary-600" />
                  </button>
                )}
              </div>
              <h3 className="font-heading font-semibold text-lg mt-4">{profileData.name}</h3>
              <p className="text-neutral-600 text-sm">Élève en terminale</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="font-heading font-semibold text-lg mb-4">Informations personnelles</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Nom complet</label>
                  <div className="flex items-center space-x-2">
                    <User size={18} className="text-neutral-500" />
                    <input
                      type="text"
                      className="input-field"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-neutral-500" />
                    <input
                      type="email"
                      className="input-field"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Téléphone</label>
                  <div className="flex items-center space-x-2">
                    <Phone size={18} className="text-neutral-500" />
                    <input
                      type="tel"
                      className="input-field"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Adresse</label>
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-neutral-500" />
                    <input
                      type="text"
                      className="input-field"
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">École</label>
                  <div className="flex items-center space-x-2">
                    <School size={18} className="text-neutral-500" />
                    <input
                      type="text"
                      className="input-field"
                      value={profileData.school}
                      onChange={(e) => setProfileData({ ...profileData, school: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Date de naissance</label>
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} className="text-neutral-500" />
                    <input
                      type="date"
                      className="input-field"
                      value={profileData.birthDate}
                      onChange={(e) => setProfileData({ ...profileData, birthDate: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Bio</label>
                <textarea
                  className="input-field h-24 resize-none"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  disabled={!isEditing}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-heading font-semibold text-lg mb-4">Préférences de notification</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Notifications par email</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Notifications push</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Newsletter hebdomadaire</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-heading font-semibold text-lg mb-4">Paramètres de confidentialité</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Profil public</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Partage des résultats</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-700">Visibilité du statut</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;