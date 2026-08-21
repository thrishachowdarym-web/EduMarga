/**
 * Auth transport layer.
 *
 * HACKATHON PROTOTYPE MODE
 * ------------------------
 * The login is handled entirely on the frontend so the prototype works
 * without a backend. The page already validates the email format and a
 * non-empty password before calling `login`, so here we only simulate a
 * brief network delay and resolve.
 *
 * Real authentication: later, POST to the FastAPI backend
 * (e.g. `${VITE_API_URL}/auth/login`) and persist the returned token.
 * Replace the body of `login()` below with that fetch call.
 */
export type LoginCredentials = { email: string; password: string };

export type LoginResult = {
  accessToken: string;
  tokenType: string;
};

export class AuthError extends Error {}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export function formatNameFromEmail(email: string): string {
  if (!email || !email.trim()) return "Student";
  const namePart = email.split("@")[0] || "Student";
  const cleaned = namePart.replace(/[0-9._-]+/g, " ").trim();
  if (!cleaned) {
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  }
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function login({ email, password }: LoginCredentials): Promise<LoginResult> {
  // Defensive check — the page validates first, but keep this as a safety net.
  if (!email || !emailPattern.test(email)) {
    throw new AuthError("Enter a valid email address, e.g. student@gmail.com");
  }
  if (!password) {
    throw new AuthError("Password cannot be empty.");
  }

  const trimmedEmail = email.trim();
  const userName = formatNameFromEmail(trimmedEmail);

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        "learnpath:user",
        JSON.stringify({
          email: trimmedEmail,
          name: userName,
          role: "student",
        }),
      );
    } catch {
      // ignore
    }
  }

  // Prototype: simulate a short sign-in delay, then succeed on the client.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    accessToken: "prototype-session-token",
    tokenType: "Bearer",
  };
}
