'use client';

import { useState } from 'react';

export default function AIAgentsPage() {
  const [agents, setAgents] = useState([
    { id: 1, name: 'Data Analyzer', status: 'Running', tasks: 145 },
    { id: 2, name: 'Content Generator', status: 'Running', tasks: 89 },
    { id: 3, name: 'Code Reviewer', status: 'Idle', tasks: 34 },
  ]);
  const [newAgentName, setNewAgentName] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgentName.trim()) return;

    setAgents([
      ...agents,
      {
        id: agents.length + 1,
        name: newAgentName,
        status: 'Idle',
        tasks: 0,
      },
    ]);
    setNewAgentName('');
    setShowCreateForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">AI Agents</h1>
          <p className="text-xl text-purple-700">
            Deploy and manage autonomous AI agents
          </p>
        </div>

        <div className="mb-6">
          {!showCreateForm ? (
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              + Create New Agent
            </button>
          ) : (
            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6">
              <form onSubmit={handleCreateAgent} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={newAgentName}
                    onChange={(e) => setNewAgentName(e.target.value)}
                    placeholder="Enter agent name..."
                    className="w-full px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">🧠</div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    agent.status === 'Running'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {agent.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">{agent.name}</h3>
              <p className="text-purple-700 mb-4">Tasks completed: {agent.tasks}</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors font-semibold">
                  Configure
                </button>
                <button className="flex-1 bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 transition-colors font-semibold">
                  Stop
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-2">About AI Agents</h3>
          <p className="text-purple-800">
            AI Agents are autonomous systems that can perform tasks, make decisions, and interact with 
            various services on your behalf. Powered by Cloudflare Workers AI.
          </p>
        </div>
      </div>
    </div>
  );
}
