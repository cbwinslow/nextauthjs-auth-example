# NextAuth.js Auth Example for Cloudflare

A modern authentication platform built with Next.js, NextAuth.js, and designed for Cloudflare's edge platform. Features a purple octopus mascot theme throughout!

## Features

- 🔐 **Secure Authentication**: NextAuth.js with credential-based login
- 🐙 **Animated Purple Octopus Mascot**: Floating throughout the site
- 🎨 **Purple Theme**: Consistent purple color scheme across all pages
- ☁️ **Cloudflare Integration**: Built for Cloudflare Pages and Workers

### Cloudflare Services

- **AutoRAG**: Retrieval-augmented generation for AI models
- **Vectorize**: Vector database for semantic search
- **D1 Database**: Serverless SQL database
- **R2 Buckets**: S3-compatible object storage
- **AI Agents**: Autonomous AI agent management
- **AI Chatbot**: Interactive AI assistant

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Cloudflare account (for production deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cbwinslow/nextauthjs-auth-example.git
cd nextauthjs-auth-example
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Generate a NextAuth secret:
```bash
openssl rand -base64 32
```

5. Update `.env.local` with your configuration:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment to Cloudflare Pages

### Using Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy to Cloudflare Pages:
```bash
wrangler pages deploy .next
```

### Using Cloudflare Dashboard

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Pages
4. Click "Create a project"
5. Connect your Git repository
6. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
7. Add environment variables in the dashboard
8. Deploy!

## Environment Variables for Production

Set these in your Cloudflare Pages dashboard:

- `NEXTAUTH_URL`: Your production URL
- `NEXTAUTH_SECRET`: A secure random string
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- Additional variables for D1, R2, Vectorize as needed

## Cloudflare Services Setup

### D1 Database

Create a D1 database for user storage:
```bash
wrangler d1 create auth-database
```

Create tables:
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### R2 Storage

Create an R2 bucket:
```bash
wrangler r2 bucket create my-bucket
```

### Vectorize

Create a Vectorize index:
```bash
wrangler vectorize create my-index --dimensions=768 --metric=cosine
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── dashboard/         # Dashboard
│   ├── autorag/           # AutoRAG interface
│   ├── vectorize/         # Vectorize interface
│   ├── database/          # Database interface
│   ├── buckets/           # R2 buckets interface
│   ├── ai-agents/         # AI agents management
│   └── chatbot/           # AI chatbot
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   └── OctopusMascot.tsx # Animated octopus
├── lib/                   # Utility functions
│   └── auth.ts           # NextAuth configuration
└── public/               # Static assets
```

## Features in Detail

### Authentication

- Email/password authentication via NextAuth.js
- Secure session management
- Protected routes
- User registration workflow

### Purple Octopus Mascot

- Animated floating octopus on every page
- Moves to random positions on page navigation
- Subtle wave animation
- Semi-transparent and non-intrusive

### Theming

- Consistent purple color palette
- Gradient backgrounds
- Smooth transitions and hover effects
- Responsive design

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Support

For issues and questions, please open an issue on GitHub.
