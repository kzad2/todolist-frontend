import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const SubtaskController = create((set) => ({ 
  subtasks: [],
  error: null,
  success: null,

  getSubtasks: async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.get(`${api}/v1/subtasks?task_id=${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      set({
        subtasks: res.data.data, 
        error: null,
      });

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal memuat subtask";
      set({ error: message });
      throw new Error(message);
    }
  },

  createSubtask: async (taskId, data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const payload = {
        ...data, 
        task_id: taskId, 
      };

      const res = await axios.post(`${api}/v1/subtasks`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      set((state) => ({
        subtasks: [...state.subtasks, res.data.data], 
        success: res.data.message || "Subtask berhasil ditambahkan", // Set success message
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal menambahkan subtask";
      set({ error: message });
      // throw new Error(message); // Opsional: throw juga jika Anda ingin UI menanganinya lebih lanjut
    }
  },

  updateSubtask: async (id, data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.put(`${api}/v1/subtasks/${id}`, data, { // Gunakan PUT
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      set((state) => ({
        subtasks: state.subtasks.map((item) =>
          item.id === id ? res.data.data : item 
        ),
        success: res.data.message || "Subtask berhasil diupdate",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal mengupdate subtask";
      set({ error: message });
      // throw new Error(message);
    }
  },

  deleteSubtask: async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.delete(`${api}/v1/subtasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      set((state) => ({
        subtasks: state.subtasks.filter((item) => item.id !== id),
        success: res.data.message || "Subtask berhasil dihapus",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal menghapus subtask";
      set({ error: message });
      // throw new Error(message);
    }
  },

  changeStatus: async (subtaskId, status) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.put( // Gunakan PUT, sesuaikan URL
        `${api}/v1/subtasks/${subtaskId}/change-status`,
        { status: status }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      set((state) => ({
        subtasks: state.subtasks.map((item) =>
          item.id === subtaskId ? res.data.data : item 
        ),
        success: res.data.message || "Status berhasil diperbarui", // Ini yang memicu notifikasi sukses
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal memperbarui status";
      set({ error: message });
    }
  },

  clearMessage: () => set({ error: null, success: null }),
}));

export default SubtaskController;