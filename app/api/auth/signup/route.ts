import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // In production, this would:
    // 1. Check if user already exists in Cloudflare D1
    // 2. Hash the password using bcrypt
    // 3. Store user in Cloudflare D1 database
    // 4. Send verification email if needed

    // For demo purposes, we'll just return success
    // In real implementation, you'd use Cloudflare D1:
    // const db = env.DB;
    // await db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)')
    //   .bind(email, hashedPassword, name)
    //   .run();

    return NextResponse.json(
      { message: 'Account created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
