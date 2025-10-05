import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // This is a simplified example. In production, you would:
        // 1. Validate credentials against Cloudflare D1 database
        // 2. Hash passwords using bcrypt or similar
        // 3. Return user object or null
        
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // For demo purposes, accept any email/password combination
        // In production, query your database here
        const user = {
          id: "1",
          email: credentials.email as string,
          name: "User",
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string
      }
      return session
    },
  },
})
