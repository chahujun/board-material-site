import { NextRequest, NextResponse } from "next/server";

const ADMIN_USERNAME = process.env.CRM_ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.CRM_ADMIN_PASSWORD || "admin123";

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
      response.cookies.set("crm_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60,
        path: "/",
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}

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
