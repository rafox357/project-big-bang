import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'friend';
  encrypted?: string;
  timestamp: Date;
}

export default function MessengerDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showEncrypted, setShowEncrypted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate encryption
  const encrypt = (text: string): string => {
    return Buffer.from(text).toString('base64');
  };

  // Simulate friend's responses
  const friendResponses = [
    "Hey! How's it going?",
    "That's interesting! Tell me more.",
    "Have you tried the new privacy features?",
    "The end-to-end encryption works great!",
  ];

  const addMessage = (text: string, sender: 'user' | 'friend') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      encrypted: encrypt(text),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, 'user');
    setInputText('');
    setIsTyping(true);

    // Simulate friend typing and responding
    setTimeout(() => {
      const response = friendResponses[Math.floor(Math.random() * friendResponses.length)];
      addMessage(response, 'friend');
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-background-dark rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-accent/10 border-b border-accent/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-accent-light font-medium">Friend</span>
          </div>
          <button
            onClick={() => setShowEncrypted(!showEncrypted)}
            className="text-sm text-accent hover:text-accent-light"
          >
            {showEncrypted ? 'Show Decrypted' : 'Show Encrypted'}
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-accent text-white'
                    : 'bg-accent/10 text-accent-light'
                }`}
              >
                <p className="text-sm">
                  {showEncrypted ? message.encrypted : message.text}
                </p>
                <p className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-accent-light/60"
          >
            <span>Friend is typing</span>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-accent rounded-full"
            />
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-accent/20">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-background p-2 rounded-lg border border-accent/20 text-accent-light focus:outline-none focus:border-accent"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
