'use client';

import { useState } from 'react';

export default function AutoRAGPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to AutoRAG
    setTimeout(() => {
      setResults([
        {
          id: 1,
          title: 'Cloudflare Workers Documentation',
          content: 'Workers are a serverless execution environment...',
          relevance: 0.95,
        },
        {
          id: 2,
          title: 'Pages Functions Guide',
          content: 'Build full-stack applications with Pages...',
          relevance: 0.87,
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">AutoRAG</h1>
          <p className="text-xl text-purple-700">
            Retrieval-Augmented Generation for enhanced AI responses
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6 mb-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-purple-900 mb-2">
                Enter your query
              </label>
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation, code examples, and more..."
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Results</h2>
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-lg shadow-md border-2 border-purple-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-purple-900">{result.title}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(result.relevance * 100)}% match
                  </span>
                </div>
                <p className="text-purple-700">{result.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
