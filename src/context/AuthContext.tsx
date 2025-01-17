import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/auth";

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    email: "hr@example.com",
    name: "HR Manager",
    role: "hr",
    position: "HR Manager",
    joinDate: "2023-01-01",
  },
  {
    id: "2",
    email: "employee@example.com",
    name: "John Doe",
    role: "employee",
    department: "Engineering",
    position: "Software Engineer",
    joinDate: "2023-02-15",
  },
];

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for stored session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find((u) => u.email === email);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }
    
    // In a real app, we would verify the password here
    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}