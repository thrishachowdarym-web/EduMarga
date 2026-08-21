/**
 * Faculty Auth transport layer.
 *
 * FRONTEND-ONLY PROTOTYPE MODE
 * ----------------------------
 * This module handles Faculty Login validation and acts as a placeholder
 * for future backend API integration.
 *
 * Requirements:
 * - Faculty email must be a valid @gmail.com address.
 * - Password must not be empty.
 * - Easy integration point for future backend API calls via `facultyLogin(email, password)`.
 */

export type FacultyLoginCredentials = {
  email: string;
  password: string;
};

export type FacultyLoginResult = {
  success: boolean;
  message: string;
  facultyEmail: string;
  role: "faculty";
};

export class FacultyAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FacultyAuthError";
  }
}

/**
 * Strict regex to ensure the email is a valid Gmail address ending with @gmail.com.
 * Rejects @yahoo.com, @outlook.com, @college.edu, @gmail.in, etc.
 */
export const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

/**
 * Validates faculty email format.
 * Returns null if valid, or an error message if invalid.
 */
export function validateFacultyEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return "Email address is required.";
  }
  if (!gmailPattern.test(trimmed)) {
    return "Please enter a valid Gmail address.";
  }
  return null;
}

/**
 * Validates faculty password.
 * Returns null if valid, or an error message if invalid.
 */
export function validateFacultyPassword(password: string): string | null {
  if (!password) {
    return "Password cannot be empty.";
  }
  return null;
}

/**
 * Placeholder frontend function for faculty login.
 * Simulates a brief verification delay and returns a success response.
 * Connect your future backend API endpoint here.
 */
export async function facultyLogin({
  email,
  password,
}: FacultyLoginCredentials): Promise<FacultyLoginResult> {
  const emailError = validateFacultyEmail(email);
  if (emailError) {
    throw new FacultyAuthError(emailError);
  }

  const passwordError = validateFacultyPassword(password);
  if (passwordError) {
    throw new FacultyAuthError(passwordError);
  }

  const trimmedEmail = email.trim();
  const namePart = trimmedEmail.split("@")[0] || "Faculty";
  const facultyName =
    namePart
      .replace(/[0-9._-]+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") || "Faculty";

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        "learnpath:user",
        JSON.stringify({
          email: trimmedEmail,
          name: `Prof. ${facultyName}`,
          role: "faculty",
        }),
      );
    } catch {
      // ignore
    }
  }

  // Prototype: simulate a short delay, then resolve on the client.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "Faculty login details are valid.",
    facultyEmail: trimmedEmail,
    role: "faculty",
  };
}
