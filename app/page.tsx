export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-purple-900 mb-4 animate-fade-in">
            Welcome to Cloudflare Auth Platform
          </h1>
          <p className="text-2xl text-purple-700 mb-8">
            Your gateway to powerful cloud services with NextAuth.js
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            title="Secure Authentication"
            description="Enterprise-grade authentication with NextAuth.js"
            icon="🔐"
          />
          <FeatureCard
            title="AI-Powered Chatbot"
            description="Interact with our intelligent AI assistant"
            icon="🤖"
          />
          <FeatureCard
            title="Vector Database"
            description="Utilize Cloudflare Vectorize for embeddings"
            icon="📊"
          />
          <FeatureCard
            title="SQL Database"
            description="Manage data with Cloudflare D1"
            icon="💾"
          />
          <FeatureCard
            title="R2 Storage"
            description="Object storage for your files"
            icon="🪣"
          />
          <FeatureCard
            title="AI Agents"
            description="Deploy and manage AI agents"
            icon="🧠"
          />
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-purple-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-purple-700">{description}</p>
    </div>
  );
}
