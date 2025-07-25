import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AuthController from "../../controllers/AuthController";

function Setting() {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Mebungah Password...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    if (form.new_password !== form.confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Konfirmasi password tidak cocok"
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/v1/auth/user/change-password`,
        {
          current_password: form.current_password,
          new_password: form.new_password,
          new_password_confirmation: form.confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

       Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Password berhasil di perbarui"
      });
      setForm({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan, coba lagi nanti"
      });
    }
  };

  return (
    <>
      <div className="bg-[#004030] mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Setting</h1>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div className="bg-[#004030] mb-6 py-5 px-5 rounded-md" data-aos="fade-up">
          <h3 className="font-bold text-2xl text-white text-center">ganti Password</h3><br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-white mb-1">Password Saat Ini</label>
              <input
                type="password"
                name="current_password"
                value={form.current_password}
                onChange={handleChange}
                className="w-full border border-white text-white px-3 py-1 rounded"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-white mb-1">Password Baru</label>
              <input
                type="password"
                name="new_password"
                value={form.new_password}
                onChange={handleChange}
                className="w-full border border-white text-white px-3 py-1 rounded"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-white mb-1">Konfirmasi Password Baru</label>
              <input
                type="password"
                name="confirm_password"
                value={form.confirm_password}
                onChange={handleChange}
                className="w-full border border-white text-white px-3 py-1 rounded"
                required
              />
            </div>

            <div className="mb-3 flex space-x-3">
              <button
                type="submit"
                className="bg-[#4A9782] hover:bg-[#4A9782]/90 text-white font-medium transition-colors px-20 py-1 rounded-sm"
              >
                Ganti Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Setting;
