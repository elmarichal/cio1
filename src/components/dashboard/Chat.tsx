import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image, FileText, Download, X, Play, Pause } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'counselor';
  content: string;
  timestamp: Date;
  file?: {
    name: string;
    type: string;
    url: string;
    size: string;
  };
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'counselor',
      content: 'Bonjour! Je suis Dr. Karim, votre conseiller d\'orientation. Comment puis-je vous aider aujourd\'hui?',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      sender: 'user',
      content: 'Bonjour! J\'aimerais discuter de mes résultats au test d\'orientation.',
      timestamp: new Date(Date.now() - 3500000)
    },
    {
      id: '3',
      sender: 'counselor',
      content: 'Bien sûr! J\'ai sous les yeux vos résultats. Je vois que vous avez un fort intérêt pour les domaines techniques.',
      timestamp: new Date(Date.now() - 3400000),
      file: {
        name: 'resultats_test.pdf',
        type: 'pdf',
        url: '#',
        size: '2.4 MB'
      }
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: 'user',
        content: newMessage,
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulate counselor typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'counselor',
          content: 'Je comprends votre intérêt. Pouvez-vous me dire plus précisément ce qui vous attire dans ce domaine?',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
      }, 3000);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const message: Message = {
          id: Date.now().toString(),
          sender: 'user',
          content: 'J\'ai partagé un fichier :',
          timestamp: new Date(),
          file: {
            name: file.name,
            type: file.type.split('/')[1],
            url: '#',
            size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          }
        };
        setMessages([...messages, message]);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFilePreview = (file: Message['file']) => {
    if (!file) return null;

    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(file.type);
    const isPDF = file.type === 'pdf';
    const isDoc = ['doc', 'docx'].includes(file.type);

    return (
      <div className="mt-2 bg-white rounded-lg border border-gray-200 p-3 max-w-sm">
        <div className="flex items-center space-x-3">
          {isImage ? (
            <Image size={24} className="text-blue-500" />
          ) : isPDF ? (
            <FileText size={24} className="text-red-500" />
          ) : isDoc ? (
            <FileText size={24} className="text-blue-500" />
          ) : (
            <FileText size={24} className="text-gray-500" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-neutral-800 truncate">
              {file.name}
            </p>
            <p className="text-xs text-neutral-500">{file.size}</p>
          </div>
          <button className="text-primary-600 hover:text-primary-700">
            <Download size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-700 font-semibold text-lg">DK</span>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-lg text-neutral-800">
              Dr. Karim
            </h2>
            <p className="text-sm text-neutral-600">
              Conseiller d'orientation • En ligne
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] ${
                message.sender === 'user'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white border border-gray-200'
              } rounded-lg px-4 py-2 shadow-sm`}
            >
              <p className={message.sender === 'user' ? 'text-white' : 'text-neutral-800'}>
                {message.content}
              </p>
              {message.file && getFilePreview(message.file)}
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/80' : 'text-neutral-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end space-x-4">
          <button
            onClick={handleFileClick}
            className="text-neutral-500 hover:text-primary-500 transition-colors"
          >
            <Paperclip size={20} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx"
          />
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Écrivez votre message..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 resize-none"
              rows={1}
            />
          </div>
          <button
            onClick={handleSend}
            className="btn-primary p-2 rounded-full"
            disabled={!newMessage.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;