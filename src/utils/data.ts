import { Testimonial, Feature, Test, Field, Resource, Conversation, ForumTopic, Webinar, Badge, Milestone, Notification, Career } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amina',
    age: 17,
    text: 'Grâce à TunisOrientation, j\'ai trouvé ma voie en informatique ! Les tests d\'orientation m\'ont aidée à découvrir mes forces.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 2,
    name: 'Mehdi',
    age: 18,
    text: 'Les ressources éducatives et les conseils personnalisés m\'ont permis de bien me préparer pour les études d\'ingénieur.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 3,
    name: 'Leila',
    age: 16,
    text: 'J\'étais perdue avant de découvrir cette plateforme. Maintenant, j\'ai un plan clair pour mon avenir en médecine.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

export const features: Feature[] = [
  {
    title: 'Tests d\'orientation',
    description: 'Découvre la filière qui te correspond à travers des tests psychométriques et d\'aptitude.',
    icon: 'clipboard-list'
  },
  {
    title: 'Ressources éducatives',
    description: 'Accède à des vidéos, guides et articles pour t\'aider dans ton parcours académique.',
    icon: 'book-open'
  },
  {
    title: 'Conseils personnalisés',
    description: 'Échange avec des conseillers d\'orientation pour planifier ton avenir scolaire et professionnel.',
    icon: 'message-circle'
  }
];

export const tests: Test[] = [
  {
    id: 'test-1',
    title: 'Test d\'intérêts professionnels',
    description: 'Découvre les domaines qui correspondent à tes intérêts et passions.',
    status: 'completed',
    score: 85,
    recommendations: ['Ingénierie informatique', 'Développement web', 'Intelligence artificielle']
  },
  {
    id: 'test-2',
    title: 'Test d\'aptitudes',
    description: 'Évalue tes compétences dans différents domaines académiques.',
    status: 'in-progress'
  },
  {
    id: 'test-3',
    title: 'Test de personnalité RIASEC',
    description: 'Identifie ton profil de personnalité professionnelle selon le modèle RIASEC.',
    status: 'not-started'
  }
];

export const fields: Field[] = [
  {
    id: 'field-1',
    name: 'Faculté des Sciences de Tunis',
    description: 'Formation en sciences fondamentales et appliquées.',
    requirements: 'Baccalauréat scientifique avec mention',
    region: 'Tunis',
    type: 'Université'
  },
  {
    id: 'field-2',
    name: 'École Nationale d\'Ingénieurs de Sfax',
    description: 'Formation d\'ingénieurs dans diverses spécialités techniques.',
    requirements: 'Concours national d\'entrée après classes préparatoires',
    region: 'Sfax',
    type: 'École d\'ingénieurs'
  },
  {
    id: 'field-3',
    name: 'Institut Supérieur des Études Technologiques de Sousse',
    description: 'Formation technologique et professionnelle.',
    requirements: 'Baccalauréat technique ou scientifique',
    region: 'Sousse',
    type: 'Institut technologique'
  }
];

export const careers: Career[] = [
  {
    id: 'career-1',
    title: 'Développeur Web',
    sector: 'Technologies de l\'information',
    description: 'Conception et développement de sites et applications web.',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Frameworks web'],
    education: ['Licence en informatique', 'Formation professionnelle en développement web'],
    salary: '1500-3000 DT/mois'
  },
  {
    id: 'career-2',
    title: 'Ingénieur Électromécanique',
    sector: 'Industrie',
    description: 'Conception, installation et maintenance de systèmes électromécaniques.',
    skills: ['Conception mécanique', 'Automatisation', 'Gestion de projets'],
    education: ['Diplôme d\'ingénieur en électromécanique'],
    salary: '2000-4000 DT/mois'
  },
  {
    id: 'career-3',
    title: 'Médecin Généraliste',
    sector: 'Santé',
    description: 'Diagnostic et traitement des maladies courantes.',
    skills: ['Diagnostic médical', 'Relation patient', 'Connaissances médicales générales'],
    education: ['Doctorat en médecine'],
    salary: '3000-5000 DT/mois'
  }
];

export const resources: Resource[] = [
  {
    id: 'resource-1',
    title: 'Comment réussir son orientation ?',
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    url: '#',
    duration: '15 min',
    progress: 75
  },
  {
    id: 'resource-2',
    title: 'Guide des filières universitaires en Tunisie',
    type: 'guide',
    thumbnail: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    url: '#',
    progress: 30
  },
  {
    id: 'resource-3',
    title: 'Préparer son CV - Les bases',
    type: 'article',
    thumbnail: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    url: '#',
    progress: 100
  }
];

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    with: 'Dr. Karim (Conseiller)',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    lastMessage: 'Nous pouvons discuter de tes résultats au test d\'orientation demain.',
    timestamp: '10:23',
    unread: true
  },
  {
    id: 'conv-2',
    with: 'Mme Fatima (Orientation)',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    lastMessage: 'Voici les informations sur les écoles d\'ingénieurs que tu as demandées.',
    timestamp: 'Hier',
    unread: false
  }
];

export const forumTopics: ForumTopic[] = [
  {
    id: 'topic-1',
    title: 'Quelle filière choisir après un bac scientifique ?',
    author: 'Ahmed',
    replies: 24,
    views: 187,
    lastActivity: 'Il y a 2 heures'
  },
  {
    id: 'topic-2',
    title: 'Études à l\'étranger : bourses et procédures',
    author: 'Sarra',
    replies: 42,
    views: 356,
    lastActivity: 'Il y a 1 jour'
  }
];

export const webinars: Webinar[] = [
  {
    id: 'webinar-1',
    title: 'Les métiers d\'avenir en Tunisie',
    presenter: 'Prof. Nabil Khelifi',
    date: '15/06/2025',
    time: '18:00',
    registered: true
  },
  {
    id: 'webinar-2',
    title: 'Comment réussir son entretien d\'embauche',
    presenter: 'Mme Lamia Bouzidi (RH)',
    date: '22/06/2025',
    time: '17:30',
    registered: false
  }
];

export const badges: Badge[] = [
  {
    id: 'badge-1',
    title: 'Explorateur',
    description: 'A complété 3 tests d\'orientation',
    icon: 'award',
    earned: true,
    date: '10/04/2025'
  },
  {
    id: 'badge-2',
    title: 'Chercheur',
    description: 'A consulté 10 fiches métiers',
    icon: 'search',
    earned: true,
    date: '15/04/2025'
  },
  {
    id: 'badge-3',
    title: 'Communicateur',
    description: 'A participé à 5 discussions sur le forum',
    icon: 'message-square',
    earned: false
  }
];

export const milestones: Milestone[] = [
  {
    id: 'milestone-1',
    title: 'Compléter le test d\'intérêts',
    date: '05/04/2025',
    completed: true
  },
  {
    id: 'milestone-2',
    title: 'Rendez-vous avec le conseiller',
    date: '20/04/2025',
    completed: false
  },
  {
    id: 'milestone-3',
    title: 'Choisir une filière',
    date: '15/05/2025',
    completed: false
  },
  {
    id: 'milestone-4',
    title: 'S\'inscrire aux concours',
    date: '01/06/2025',
    completed: false
  }
];

export const notifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Rappel: Inscription universitaire',
    message: 'L\'inscription pour la faculté des sciences commence dans 5 jours.',
    date: '18/04/2025',
    read: false,
    type: 'reminder'
  },
  {
    id: 'notif-2',
    title: 'Badge débloqué',
    message: 'Félicitations! Tu as obtenu le badge "Explorateur".',
    date: '10/04/2025',
    read: true,
    type: 'achievement'
  },
  {
    id: 'notif-3',
    title: 'Nouveau message',
    message: 'Dr. Karim t\'a envoyé un message.',
    date: '17/04/2025',
    read: false,
    type: 'message'
  }
];