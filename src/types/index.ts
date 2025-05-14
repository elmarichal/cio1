export interface NavItem {
  title: string;
  path: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  avatar: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface DashboardItem {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'not-started';
  score?: number;
  recommendations?: string[];
}

export interface Field {
  id: string;
  name: string;
  description: string;
  requirements: string;
  region: string;
  type: string;
}

export interface Career {
  id: string;
  title: string;
  sector: string;
  description: string;
  skills: string[];
  education: string[];
  salary: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'guide' | 'article';
  thumbnail: string;
  url: string;
  duration?: string;
  progress?: number;
}

export interface Conversation {
  id: string;
  with: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export interface ForumTopic {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
}

export interface Webinar {
  id: string;
  title: string;
  presenter: string;
  date: string;
  time: string;
  registered: boolean;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'reminder' | 'achievement' | 'message' | 'system';
}