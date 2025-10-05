'use client';

import { useState } from 'react';

export default function DatabasePage() {
  const [query, setQuery] = useState('SELECT * FROM users LIMIT 10');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleExecute = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate SQL query execution
    setTimeout(() => {
      setResults([
        { id: 1, email: 'user1@example.com', name: 'John Doe', created_at: '2024-01-15' },
        { id: 2, email: 'user2@example.com', name: 'Jane Smith', created_at: '2024-01-16' },
        { id: 3, email: 'user3@example.com', name: 'Bob Johnson', created_at: '2024-01-17' },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">SQL Database (D1)</h1>
          <p className="text-xl text-purple-700">
            Cloudflare D1 serverless SQL database
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6 mb-6">
          <form onSubmit={handleExecute} className="space-y-4">
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-purple-900 mb-2">
                SQL Query
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your SQL query..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm text-gray-900"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {loading ? 'Executing...' : 'Execute Query'}
            </button>
          </form>
        </div>

        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden">
            <div className="px-6 py-4 bg-purple-50 border-b-2 border-purple-200">
              <h2 className="text-xl font-bold text-purple-900">Query Results</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-purple-200">
                <thead className="bg-purple-50">
                  <tr>
                    {Object.keys(results[0]).map((key) => (
                      <th
                        key={key}
                        className="px-6 py-3 text-left text-xs font-medium text-purple-900 uppercase tracking-wider"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-purple-200">
                  {results.map((row, idx) => (
                    <tr key={idx} className="hover:bg-purple-50">
                      {Object.values(row).map((value: any, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-purple-900">
                          {String(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8 bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-2">About D1</h3>
          <p className="text-purple-800">
            Cloudflare D1 is a serverless SQL database built on SQLite. It provides global distribution, 
            automatic backups, and seamless integration with Workers and Pages.
          </p>
        </div>
      </div>
    </div>
  );
}
