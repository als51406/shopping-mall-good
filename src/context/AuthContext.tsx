import React, { createContext, useState, useContext, useEffect } from 'react';

type User = { name: string; email: string } | null;

interface Credentials { email: string; password: string; name?: string }

interface AuthContextValue {
  user: User;
  login: (email: string, password: string) => boolean;
  register: (creds: Credentials) => { success: boolean; message?: string };
  logout: () => void;
}

const STORAGE_KEY = 'shopping_mall_auth_v1';
const USERS_KEY = 'shopping_mall_users_v1';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function loadCurrentUser(): User {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

function saveCurrentUser(user: User) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
}

function loadUsers(): Array<{ email: string; password: string; name: string }> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveUsers(users: Array<{ email: string; password: string; name: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User>(() => loadCurrentUser());

  useEffect(() => {
    saveCurrentUser(user);
  }, [user]);

  function register(creds: Credentials) {
    const { email, password, name } = creds;
    if (!email || !password || !name) {
      return { success: false, message: 'invalid input' };
    }
    const users = loadUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'email already registered' };
    }
    users.push({ email, password, name });
    saveUsers(users);
    setUser({ email, name });
    return { success: true };
  }

  function login(email: string, password: string) {
    const users = loadUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return false;
    setUser({ email: found.email, name: found.name });
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
