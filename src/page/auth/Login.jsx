import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = AuthController((state) => state.login);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Login...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await login(email, password, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Selamat datang kembali",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: err.response?.data?.message || "Email atau password salah",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl w-5xl grid md:grid-cols-2 grid-cols-1 md:rounded-3xl rounded-xl">
        <div className="bg-[#004030] rounded-l-3xl justify-center items-center hidden md:flex">
          <Link to="/" className="text-6xl text-white font-bold">
            Todobee
          </Link>
          <p className="">
          </p>
        </div>
        <div className="py-15 px-10">
          <h2 className="font-bold text-center text-4xl text-black">Login</h2>
          <form className="mt-5" onSubmit={handleLogin}>
            <div>
              <label className="text-black">Email</label>
              <label className="input validator w-full mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-black">Password</label>
              <label className="input validator w-full mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                  minLength={8}
                />
              </label>
            </div>
            <div className="mt-4">
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="text-white btn hover:bg-[#3e7064] bg-[#004030] w-full"
              >
                Login
              </button>
            </div>
            <div className="mt-2">
              <small className="text-gray-700">
                Belum punya akun?{" "}
                <Link
                  to="/register"
                  className="text-[#004030] hover:text-[#3e8976]"
                >
                  Daftar sekarang
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
