import Link from 'next/link';

export default function DashboardPage() {
  const services = [
    {
      name: 'AutoRAG',
      description: 'Automatic retrieval-augmented generation for AI models',
      href: '/autorag',
      icon: '🔍',
      status: 'Active',
    },
    {
      name: 'Vectorize',
      description: 'Vector database for embeddings and semantic search',
      href: '/vectorize',
      icon: '📊',
      status: 'Active',
    },
    {
      name: 'SQL Database',
      description: 'Cloudflare D1 serverless SQL database',
      href: '/database',
      icon: '💾',
      status: 'Active',
    },
    {
      name: 'R2 Buckets',
      description: 'Object storage compatible with S3 API',
      href: '/buckets',
      icon: '🪣',
      status: 'Active',
    },
    {
      name: 'AI Agents',
      description: 'Deploy and manage autonomous AI agents',
      href: '/ai-agents',
      icon: '🧠',
      status: 'Active',
    },
    {
      name: 'AI Chatbot',
      description: 'Interactive AI assistant with natural language',
      href: '/chatbot',
      icon: '🤖',
      status: 'Active',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">Dashboard</h1>
          <p className="text-xl text-purple-700">
            Welcome to your Cloudflare services dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-purple-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {service.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-purple-700">{service.description}</p>
              </div>
              <div className="bg-purple-50 px-6 py-4">
                <span className="text-purple-700 font-semibold hover:text-purple-900">
                  Open →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="API Requests" value="1,234" />
            <StatCard label="Storage Used" value="45 GB" />
            <StatCard label="AI Queries" value="567" />
            <StatCard label="Active Sessions" value="12" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-purple-50 rounded-lg p-4 text-center">
      <div className="text-3xl font-bold text-purple-900 mb-1">{value}</div>
      <div className="text-sm text-purple-700">{label}</div>
    </div>
  );
}
