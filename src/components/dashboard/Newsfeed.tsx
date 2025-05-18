import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  Image, Link, MessageCircle, Heart, Share2, MoreHorizontal,
  ThumbsUp, Smile, Camera, Paperclip, Send
} from 'lucide-react';

interface Post {
  id: string;
  type: 'text' | 'photo' | 'album' | 'link' | 'test';
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  media?: string[];
  link?: {
    url: string;
    title: string;
    description: string;
    image: string;
  };
  test?: {
    title: string;
    score: number;
    total: number;
  };
}

const samplePosts: Post[] = [
  {
    id: '1',
    type: 'text',
    content: "Je viens de terminer mon test d'orientation ! Très content des résultats 😊",
    author: {
      name: 'Ahmed Ben Salem',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    timestamp: new Date(2025, 3, 15, 14, 30),
    likes: 24,
    comments: 5,
    shares: 2
  },
  {
    id: '2',
    type: 'photo',
    content: "Visite du campus de l'École d'Ingénieurs !",
    author: {
      name: 'Sarra Mansouri',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    timestamp: new Date(2025, 3, 15, 12, 15),
    likes: 45,
    comments: 8,
    shares: 3,
    media: [
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    ]
  },
  {
    id: '3',
    type: 'album',
    content: "Photos de la journée portes ouvertes à la faculté de médecine !",
    author: {
      name: 'Yassine Khelifi',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    timestamp: new Date(2025, 3, 14, 18, 45),
    likes: 67,
    comments: 12,
    shares: 5,
    media: [
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg',
      'https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg'
    ]
  },
  {
    id: '4',
    type: 'link',
    content: "Un article intéressant sur les nouvelles filières d'études en Tunisie",
    author: {
      name: 'Leila Brahimi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    timestamp: new Date(2025, 3, 14, 15, 20),
    likes: 32,
    comments: 7,
    shares: 15,
    link: {
      url: 'https://example.com/article',
      title: 'Les nouvelles filières d\'études en Tunisie pour 2025',
      description: 'Découvrez les nouvelles opportunités d\'études supérieures en Tunisie...',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg'
    }
  },
  {
    id: '5',
    type: 'test',
    content: "Je viens de terminer le test de personnalité RIASEC !",
    author: {
      name: 'Karim Mejri',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
    },
    timestamp: new Date(2025, 3, 14, 11, 10),
    likes: 18,
    comments: 4,
    shares: 1,
    test: {
      title: 'Test RIASEC',
      score: 85,
      total: 100
    }
  }
];

const Newsfeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [newPost, setNewPost] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      type: 'text',
      content: newPost,
      author: {
        name: 'Utilisateur actuel',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
      },
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setSelectedImage(null);
  };

  const formatTimestamp = (date: Date) => {
    return format(date, "d MMMM 'à' HH:mm", { locale: fr });
  };

  const renderPostContent = (post: Post) => {
    switch (post.type) {
      case 'photo':
        return (
          <div className="mt-4">
            <img
              src={post.media![0]}
              alt="Post"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        );
      
      case 'album':
        return (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {post.media!.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        );
      
      case 'link':
        return (
          <div className="mt-4 border rounded-lg overflow-hidden">
            <img
              src={post.link!.image}
              alt={post.link!.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-gray-50">
              <h3 className="font-medium text-neutral-800">{post.link!.title}</h3>
              <p className="text-neutral-600 text-sm mt-1">{post.link!.description}</p>
              <a
                href={post.link!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 text-sm hover:underline mt-2 inline-block"
              >
                Lire l'article
              </a>
            </div>
          </div>
        );
      
      case 'test':
        return (
          <div className="mt-4 bg-primary-50 rounded-lg p-4">
            <h3 className="font-medium text-neutral-800">{post.test!.title}</h3>
            <div className="mt-2">
              <div className="flex justify-between text-sm text-neutral-600 mb-1">
                <span>Score</span>
                <span>{post.test!.score}/{post.test!.total}</span>
              </div>
              <div className="h-2 bg-primary-100 rounded-full">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${(post.test!.score / post.test!.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <div className="card">
        <form onSubmit={handlePostSubmit}>
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <textarea
                placeholder="Partagez quelque chose..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
                rows={3}
              ></textarea>
              
              {selectedImage && (
                <div className="mt-2 relative">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="p-2 text-neutral-600 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    <Camera size={20} />
                  </button>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setSelectedImage(file);
                    }}
                  />
                  <button
                    type="button"
                    className="p-2 text-neutral-600 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Paperclip size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-neutral-600 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Smile size={20} />
                  </button>
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                  disabled={!newPost.trim() && !selectedImage}
                >
                  <Send size={18} />
                  <span>Publier</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="card">
          {/* Post Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-neutral-800">{post.author.name}</h3>
                <p className="text-sm text-neutral-500">{formatTimestamp(post.timestamp)}</p>
              </div>
            </div>
            <button className="p-1 text-neutral-600 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-neutral-800">{post.content}</p>
            {renderPostContent(post)}
          </div>

          {/* Post Stats */}
          <div className="flex items-center justify-between mt-4 pb-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-100 p-1 rounded-full">
                <Heart size={14} className="text-primary-600" />
              </div>
              <span className="text-sm text-neutral-600">{post.likes}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <span>{post.comments} commentaires</span>
              <span>{post.shares} partages</span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between pt-4">
            <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
              <ThumbsUp size={20} />
              <span>J'aime</span>
            </button>
            <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
              <MessageCircle size={20} />
              <span>Commenter</span>
            </button>
            <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
              <Share2 size={20} />
              <span>Partager</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;