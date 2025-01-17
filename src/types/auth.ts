export type UserRole = "hr" | "employee";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  position?: string;
  joinDate?: string;
}