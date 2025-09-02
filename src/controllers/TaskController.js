import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const TaskController = create((set) => ({
  task: [],
  error: null,
  success: null,

  getTask: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.get(`${api}/v1/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      set({
        task: res.data.data,
        error: null,
        success: null,
      });

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal memuat task";
      set({ error: message, task: [] });
      throw new Error(message);
    }
  },

  storeTask: async (formData, editId = null) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      let res;
      let url;
      let method;
      let successMessage;

      if (editId) {
        url = `${api}/v1/tasks/${editId}`;
        method = 'post';
        formData.append('_method', 'PUT');
        successMessage = "Task berhasil diupdate";
      } else {
        url = `${api}/v1/tasks`;
        method = 'post';
        successMessage = "Task berhasil ditambahkan";
      }

      res = await axios[method](url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      if (editId) {
        set((state) => ({
          task: state.task.map((item) =>
            item.id === editId ? res.data.data : item
          ),
          success: res.data.message || successMessage,
          error: null,
        }));
      } else {
        set((state) => ({
          task: [...(state.task ?? []), res.data.data],
          success: res.data.message || successMessage,
          error: null,
        }));
      }

    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal menyimpan task";
      set({ error: message });
      throw new Error(message);
    }
  },

  deleteTask: async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.delete(`${api}/v1/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      set((state) => ({
        task: state.task.filter((item) => item.id !== id),
        success: res.data.message || "Task berhasil dihapus",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal menghapus task";
      set({ error: message });
      throw new Error(message);
    }
  },

  deleteAllTasks: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token autentikasi tidak ditemukan.");
      }

      const res = await axios.delete(`${api}/v1/tasks/delete-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      set({
        task: [],
        success: res.data.message || "Semua task berhasil dihapus",
        error: null,
      });
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Gagal menghapus semua task";
      set({ error: message });
      throw new Error(message);
    }
  },

  clearMessage: () => set({ error: null, success: null }),
}));

export default TaskController;