'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/autorag', label: 'AutoRAG' },
    { href: '/vectorize', label: 'Vectorize' },
    { href: '/database', label: 'Database' },
    { href: '/buckets', label: 'Buckets' },
    { href: '/ai-agents', label: 'AI Agents' },
    { href: '/chatbot', label: 'Chatbot' },
  ];

  return (
    <nav className="bg-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🐙</span>
              <span className="font-bold text-xl">Cloudflare Auth</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-purple-700 text-white'
                    : 'text-purple-100 hover:bg-purple-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md text-sm font-medium bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
