import { NextRequest, NextResponse } from "next/server";

// Simple session-based auth using a signed token
// In production, use Supabase Auth or JWT library

const ADMIN_USERNAME = process.env.CRM_ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.CRM_ADMIN_PASSWORD || "admin123";

// Simple session token = base64(username:timestamp:hash)
// For production, replace with proper JWT
function createSessionToken(username: string): string {
  const ts = Date.now();
  const raw = `${username}:${ts}:${ADMIN_PASSWORD}`;
  return Buffer.from(raw).toString("base64");
}

function validateSessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username, ts, password] = decoded.split(":");
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) return false;
    // Token expires after 24 hours
    const age = Date.now() - parseInt(ts);
    if (age > 24 * 60 * 60 * 1000) return false;
    return true;
  } catch {
    return false;
  }
}

// POST /api/admin/login — Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = createSessionToken(username);
      const response = NextResponse.json({
        success: true,
        token,
        message: "Login successful.",
      });
      // Set cookie
      response.cookies.set("crm_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60, // 24 hours
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { error: "Invalid credentials." },
      { status: 401 }
    );
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// Helper function for other API routes to check auth
export function checkAuth(request: NextRequest): boolean {
  const token = request.cookies.get("crm_session")?.value;
  if (!token) return false;
  return validateSessionToken(token);
}

// GET /api/admin/login — Check if logged in
export async function GET(request: NextRequest) {
  const isAuthed = checkAuth(request);
  return NextResponse.json({ authenticated: isAuthed });
}
