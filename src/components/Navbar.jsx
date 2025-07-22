import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "../components/ScrollToTop.jsx";

const baseUrl = import.meta.env.VITE_API_URL;

async function test() {
  try {
    const res = await fetch(`${baseUrl}/v1/users`);
    if (!res.ok) throw new Error("Gagal fetch");

    const data = await res.json();
    console.log("Data user:", data);
    alert(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
    alert("Gagal mengambil data user");
  }
}


function Navbar() {
  return (
    <nav
      className={`
       fixed w-full top-0 left-0 z-50 bg-white shadow-lg py-3
        px-30 flex items-center justify-between
        transition-all duration-300 ease-in-out
      `}
    >

      <ScrollToTop />
      {/* Logo & Links */}
      <div className="flex items-center space-x-8">
        <span className="text-green-900 font-bold text-xl">Todolist</span>
        <div className="space-x-6 text-green-900 font-medium justify-center">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact</Link>
          <button 
                className="text-black hover:text-gray-700 ml-2"
                onClick={test}
                  >Test Ambil User
                  </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <Link className="border border-green-900 text-green-900 px-4 py-1 rounded hover:bg-green-50 transition"
        to="/login">Login</Link>
        <Link className="bg-green-900 text-white px-4 py-1 rounded hover:bg-green-800 transition"
        to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;