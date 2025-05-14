import React, { useState } from 'react';
import { Search, MapPin, School, Filter, ExternalLink } from 'lucide-react';
import { fields } from '../../utils/data';

const Programs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  
  const regions = [...new Set(fields.map(field => field.region))];
  const types = [...new Set(fields.map(field => field.type))];
  
  const filteredFields = fields.filter(field => {
    return (
      field.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === '' || field.region === regionFilter) &&
      (typeFilter === '' || field.type === typeFilter)
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Filières et établissements</h2>
        <p className="text-neutral-600 mt-1">Explore les différentes filières et établissements disponibles en Tunisie.</p>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Rechercher une filière..." 
              className="pl-10 input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Region Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={18} className="text-gray-400" />
            </div>
            <select 
              className="pl-10 input-field appearance-none"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="">Toutes les régions</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>{region}</option>
              ))}
            </select>
          </div>
          
          {/* Type Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <School size={18} className="text-gray-400" />
            </div>
            <select 
              className="pl-10 input-field appearance-none"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Tous les types</option>
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Clear Filters */}
          <button 
            className="btn-outline flex items-center justify-center space-x-2"
            onClick={() => {
              setSearchTerm('');
              setRegionFilter('');
              setTypeFilter('');
            }}
          >
            <Filter size={18} />
            <span>Réinitialiser les filtres</span>
          </button>
        </div>
      </div>
      
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFields.length > 0 ? (
          filteredFields.map((field) => (
            <div key={field.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading font-semibold text-lg text-neutral-800">{field.name}</h3>
                  <div className="badge badge-primary">{field.type}</div>
                </div>
                
                <div className="flex items-center text-sm text-neutral-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span>{field.region}</span>
                </div>
                
                <p className="text-neutral-600 mt-3">{field.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-medium text-neutral-700 text-sm mb-1">Conditions d'admission :</h4>
                  <p className="text-neutral-600 text-sm">{field.requirements}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 bg-gray-50 p-4 flex justify-between items-center">
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                  <ExternalLink size={16} />
                  <span>Visite virtuelle</span>
                </button>
                
                <button className="btn-primary text-sm py-1.5">
                  En savoir plus
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 bg-white rounded-lg shadow p-8 text-center">
            <div className="text-neutral-500 font-medium">Aucun résultat trouvé</div>
            <p className="text-neutral-600 text-sm mt-2">Essayez d'autres critères de recherche ou de réinitialiser les filtres.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;