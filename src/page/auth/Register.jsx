import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Mendaftarkan akun...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await register(form, navigate);
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
        text: "Silakan login dengan akun Anda.",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: err?.response?.data?.message || "Terjadi kesalahan. Coba lagi nanti.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-grey-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg max-w-4xl w-full grid md:grid-cols-2 grid-cols-1 rounded-xl overflow-hidden">
        <div className="bg-[#004030] hidden md:flex justify-center items-center">
          <Link to="/" className="text-6xl text-white font-bold">
            TodoList
          </Link>
        </div>
        <div className="p-10">
          <h2 className="font-bold text-black text-center text-4xl">Daftar</h2>
          <form className="mt-6 space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="text-black block mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nama lengkap"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2a816b]"
              />
            </div>
            <div>
              <label className="text-black block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="mail@site.com"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2a816b]"
              />
            </div>
            <div>
              <label className="text-black block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={4}
                placeholder="Minimal 4 karakter"
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2a816b]"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 bg-[#004030] hover:bg-[#004030] text-white font-semibold rounded transition duration-200"
            >
              Daftar
            </button>
            <div className="text-center mt-4">
              <small className="text-gray-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-black hover:text-gray-700">
                  Login sekarang
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
