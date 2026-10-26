import { create } from "zustand";

export const useAppointments = create(() => ({
  items: [],
}));