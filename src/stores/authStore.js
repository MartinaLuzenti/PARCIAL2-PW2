import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      loading: false,
      error: null,
      // Acciones
      login: async (username, password) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          });
          if (response.ok) {
            const user = await response.json();
            set({ user, loading: false });
            return { success: true };
          } else {
            set({ error: "Credenciales inválidas", loading: false });
            return { success: false };
          }
        } catch (error) {
          set({ error: "Error de conexión " + error, loading: false });
          return { success: false };
        }
      },
      logout: () => {
        set({ user: null, error: null });
      },
      clearError: () => {
        set({ error: null });
      },
      // Getters
      isAuthenticated: () => !!get().user,
    }),
    {
      name: "auth-storage", // nombre para localStorage
      partialize: (state) => ({ user: state.user }), // solo persistir user
    }
  )
);
