import React, { useEffect } from "react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { create } from "zustand";

type AuthState = {
  user: { name: string } | null;
  login: () => void;
  logout: () => void;
};

const useAuth = create<AuthState>((set) => ({
  user: null,
  login: () => set({ user: { name: "Maulik" } }),
  logout: () => set({ user: null }),
}));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useAuth((s) => s.user);
  return user ? children : <Navigate to="/login" replace />;
}

function Login() {
  const login = useAuth((s) => s.login);
  const user = useAuth((s) => s.user);
  if (user) return <Navigate to="/dashboard" replace />;
  return (
    <div style={{ padding: 40 }}>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

function Dashboard() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  return (
    <div style={{ padding: 40 }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Rep10 () {
  useEffect(() => () => useAuth.setState({ user: null }), []);

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </MemoryRouter>
  );
}

export default Rep10;
