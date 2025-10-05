'use client';

import { useState } from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m your AI assistant powered by Cloudflare Workers AI. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: `I understand you're asking about "${input}". As an AI assistant, I can help you with Cloudflare services, coding questions, and general information. What would you like to know more about?`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">AI Chatbot</h1>
          <p className="text-xl text-purple-700">
            Intelligent assistant powered by Cloudflare Workers AI
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 flex flex-col" style={{ height: '600px' }}>
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-900'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">🐙</span>
                      <span className="font-semibold">AI Assistant</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-purple-200' : 'text-purple-600'}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-purple-100 text-purple-900 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🐙</span>
                    <span>Typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t-2 border-purple-200 p-4">
            <form onSubmit={handleSend} className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickAction icon="💡" text="Ask about Cloudflare" />
          <QuickAction icon="📝" text="Get code examples" />
          <QuickAction icon="🔧" text="Troubleshoot issues" />
        </div>

        <div className="mt-8 bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-2">About the Chatbot</h3>
          <p className="text-purple-800">
            This AI chatbot uses Cloudflare Workers AI to provide intelligent responses. It can help with 
            questions about Cloudflare services, coding, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon, text }: { icon: string; text: string }) {
  return (
    <button className="bg-white border-2 border-purple-200 rounded-lg p-4 hover:shadow-lg transition-all hover:-translate-y-1 text-left">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-purple-900 font-semibold">{text}</div>
    </button>
  );
}
