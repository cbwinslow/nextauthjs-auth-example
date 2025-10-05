'use client';

import { useState } from 'react';

export default function VectorizePage() {
  const [text, setText] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleVectorize = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate vectorization and similarity search
    setTimeout(() => {
      setResults([
        {
          id: 1,
          text: 'Similar document about cloud computing',
          similarity: 0.92,
          embedding: '[0.123, 0.456, ...]',
        },
        {
          id: 2,
          text: 'Related content on serverless architecture',
          similarity: 0.85,
          embedding: '[0.789, 0.012, ...]',
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">Vectorize</h1>
          <p className="text-xl text-purple-700">
            Convert text to vectors and perform semantic similarity search
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6 mb-6">
          <form onSubmit={handleVectorize} className="space-y-4">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-purple-900 mb-2">
                Text to vectorize
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to convert to vector embeddings..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Vectorize & Search'}
            </button>
          </form>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Similar Documents</h2>
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-lg shadow-md border-2 border-purple-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-lg text-purple-900 flex-1">{result.text}</p>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                    {Math.round(result.similarity * 100)}% similar
                  </span>
                </div>
                <p className="text-sm text-purple-600 font-mono">{result.embedding}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-2">About Vectorize</h3>
          <p className="text-purple-800">
            Cloudflare Vectorize is a globally distributed vector database designed for storing and querying 
            vector embeddings. Perfect for building AI-powered applications with semantic search capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
