import { createContext, useContext, useState, useEffect } from "react";

// Mock user data
const mockUsers = [
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

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for stored session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find((u) => u.email === email);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }
    
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