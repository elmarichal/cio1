import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, Building2, GraduationCap, Clock, ExternalLink } from 'lucide-react';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const jobListings = [
    {
      id: 1,
      title: "Développeur Full Stack",
      company: "TechTunisia",
      location: "Tunis",
      type: "CDI",
      requirements: "Bac+3 en Informatique",
      description: "Nous recherchons un développeur Full Stack passionné pour rejoindre notre équipe dynamique.",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      salary: "2500-3500 DT",
      posted: "Il y a 2 jours"
    },
    {
      id: 2,
      title: "Ingénieur DevOps",
      company: "CloudMasters",
      location: "Sfax",
      type: "CDI",
      requirements: "Bac+5 en Informatique",
      description: "Poste d'ingénieur DevOps pour gérer notre infrastructure cloud et nos pipelines CI/CD.",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      salary: "3000-4500 DT",
      posted: "Il y a 1 semaine"
    },
    {
      id: 3,
      title: "Data Analyst Junior",
      company: "DataTech",
      location: "Sousse",
      type: "Stage",
      requirements: "Bac+3 en Data Science",
      description: "Stage de fin d'études pour un analyste de données motivé.",
      skills: ["Python", "SQL", "Power BI", "Excel"],
      salary: "800-1200 DT",
      posted: "Il y a 3 jours"
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === '' || job.location === locationFilter) &&
      (typeFilter === '' || job.type === typeFilter)
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-neutral-800">Marché du travail</h2>
        <p className="text-neutral-600 mt-1">Explore les opportunités professionnelles et les tendances du marché</p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-primary-50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold text-lg text-neutral-800">Secteurs en croissance</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center text-neutral-600">
                  <span className="w-32">Tech</span>
                  <div className="flex-1 h-2 bg-primary-100 rounded-full ml-2">
                    <div className="h-full w-[85%] bg-primary-500 rounded-full"></div>
                  </div>
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="w-32">Santé</span>
                  <div className="flex-1 h-2 bg-primary-100 rounded-full ml-2">
                    <div className="h-full w-[70%] bg-primary-500 rounded-full"></div>
                  </div>
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="w-32">Énergie verte</span>
                  <div className="flex-1 h-2 bg-primary-100 rounded-full ml-2">
                    <div className="h-full w-[60%] bg-primary-500 rounded-full"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card bg-secondary-50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold text-lg text-neutral-800">Compétences demandées</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="badge badge-secondary">Intelligence Artificielle</span>
                <span className="badge badge-secondary">Cloud Computing</span>
                <span className="badge badge-secondary">Data Analysis</span>
                <span className="badge badge-secondary">Cybersécurité</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-accent-50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold text-lg text-neutral-800">Salaires moyens</h3>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li className="flex justify-between">
                  <span>Junior</span>
                  <span className="font-medium">1500-2500 DT</span>
                </li>
                <li className="flex justify-between">
                  <span>Confirmé</span>
                  <span className="font-medium">2500-4000 DT</span>
                </li>
                <li className="flex justify-between">
                  <span>Senior</span>
                  <span className="font-medium">4000+ DT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Job Search */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un poste..."
              className="pl-10 input-field w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="input-field"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">Toutes les villes</option>
              <option value="Tunis">Tunis</option>
              <option value="Sfax">Sfax</option>
              <option value="Sousse">Sousse</option>
            </select>
            <select
              className="input-field"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Tous les types</option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="Stage">Stage</option>
            </select>
            <button className="btn-outline flex items-center space-x-2">
              <Filter size={18} />
              <span>Filtres</span>
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Building2 size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-neutral-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mt-1">
                        <span className="flex items-center">
                          <Building2 size={16} className="mr-1" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap size={16} className="mr-1" />
                          {job.requirements}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 mt-3">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="badge badge-primary">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-medium text-neutral-800">{job.salary}</span>
                  <button className="btn-primary flex items-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Postuler</span>
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

export default Jobs;