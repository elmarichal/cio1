import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import { 
  ChevronRight, ChevronLeft, Menu, X, Check, AlertCircle,
  Calendar, Clock, Upload, Search, Filter, Bell, Info,
  Home, Book, Settings, LogOut, User, MessageSquare,
  ArrowLeft, ArrowRight, Plus, Minus, Camera, FileText,
  Star, Heart, ThumbsUp, Share2, Bookmark, Send, Briefcase,
  GraduationCap
} from 'lucide-react';

const Tests: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showSidenav, setShowSidenav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sidenavRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    education: '',
    interests: [] as string[],
    personality: '',
    workStyle: '',
    communication: 5,
    leadership: 5,
    stress: 5,
    favoriteColor: '#000000',
    birthdate: '',
    schedule: '',
    agreement: false,
    bio: '',
    file: null as File | null,
    email: '',
    phone: '',
    website: '',
    socialMedia: [] as string[],
    languages: [] as string[],
    skills: [] as { value: string; label: string }[],
    experience: 0,
    preferences: {
      notifications: true,
      darkMode: false,
      language: 'fr'
    }
  });

  const steps = [
    { title: 'Informations personnelles', icon: User },
    { title: 'Éducation et compétences', icon: Book },
    { title: 'Préférences et intérêts', icon: Heart },
    { title: 'Expérience', icon: Bookmark },
    { title: 'Finalisation', icon: Check }
  ];

  const skillOptions = [
    { value: 'communication', label: 'Communication' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'teamwork', label: 'Travail d\'équipe' },
    { value: 'problemSolving', label: 'Résolution de problèmes' }
  ];

  const tabItems = [
    { title: 'Personnel', icon: User },
    { title: 'Professionnel', icon: Briefcase },
    { title: 'Académique', icon: GraduationCap }
  ];

  const carouselItems = [
    { title: 'Bienvenue', description: 'Commencez votre test de personnalité' },
    { title: 'Conseils', description: 'Répondez honnêtement à toutes les questions' },
    { title: 'Résultats', description: 'Découvrez votre profil unique' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
        setShowSidenav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;
      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillsChange = (selectedOptions: any) => {
    setFormData(prev => ({ ...prev, skills: selectedOptions }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccessMessage(true);
      localStorage.setItem('testResults', JSON.stringify(formData));
      navigate('/dashboard/test-results');
    } catch (error) {
      setShowErrorMessage(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleAccordion = (index: number) => {
    setAccordionOpen(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const nextCarouselSlide = () => {
    setCarouselIndex(prev => (prev + 1) % carouselItems.length);
  };

  const prevCarouselSlide = () => {
    setCarouselIndex(prev => 
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments(prev => [...prev, newComment]);
      setNewComment('');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-field"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Date de naissance
                </label>
                <input
                  type="date"
                  name="birthdate"
                  required
                  className="input-field"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows={4}
                  className="input-field"
                  value={formData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Education Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Niveau d'études
                </label>
                <select
                  name="education"
                  className="input-field"
                  value={formData.education}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez</option>
                  <option value="bac">Baccalauréat</option>
                  <option value="licence">Licence</option>
                  <option value="master">Master</option>
                  <option value="doctorat">Doctorat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Compétences
                </label>
                <Select
                  isMulti
                  options={skillOptions}
                  value={formData.skills}
                  onChange={handleSkillsChange}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Preferences Fields */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Style de travail préféré
                </label>
                <select
                  name="workStyle"
                  className="input-field"
                  value={formData.workStyle}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez</option>
                  <option value="individual">Travail individuel</option>
                  <option value="team">Travail en équipe</option>
                  <option value="mixed">Mixte</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Communication ({formData.communication})
                </label>
                <input
                  type="range"
                  name="communication"
                  min="1"
                  max="10"
                  value={formData.communication}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Leadership ({formData.leadership})
                </label>
                <input
                  type="range"
                  name="leadership"
                  min="1"
                  max="10"
                  value={formData.leadership}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Experience Fields */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Années d'expérience
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, experience: Math.max(0, prev.experience - 1) }))}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: parseInt(e.target.value) || 0 }))}
                    className="input-field w-20 text-center"
                    min="0"
                    max="20"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, experience: Math.min(20, prev.experience + 1) }))}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Summary */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-4">Résumé de vos réponses</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="font-medium">Nom:</dt>
                  <dd>{formData.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Email:</dt>
                  <dd>{formData.email}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Style de travail:</dt>
                  <dd>{formData.workStyle}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Communication:</dt>
                  <dd>{formData.communication}/10</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={(e) => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="agreement" className="text-sm text-neutral-700">
                Je confirme que toutes les informations fournies sont exactes
              </label>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-heading font-bold text-neutral-800">
              {steps[currentStep].title}
            </h2>
            <div className="text-sm text-neutral-600">
              Étape {currentStep + 1} sur {steps.length}
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-primary-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="btn-outline flex items-center space-x-2"
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} />
              <span>Précédent</span>
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                className="btn-primary flex items-center space-x-2"
                disabled={loading || !formData.agreement}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Check size={18} />
                    <span>Terminer</span>
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Suivant</span>
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </form>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Confirmation
                </h3>
                <p className="text-neutral-600 mb-6">
                  Êtes-vous sûr de vouloir soumettre le test ?
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn-outline"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      navigate('/dashboard/test-results');
                    }}
                    className="btn-primary"
                  >
                    Confirmer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50"
            >
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-primary-500" />
                <div>
                  <p className="font-medium">Notification</p>
                  <p className="text-sm text-neutral-600">
                    N'oubliez pas de sauvegarder vos réponses !
                  </p>
                </div>
                <button
                  onClick={() => setShowNotification(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tests;