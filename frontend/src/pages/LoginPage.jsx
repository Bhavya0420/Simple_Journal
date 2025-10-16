import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill all fields");

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      // Apply the saved theme from localStorage
      const theme = localStorage.getItem("theme") || "lemonade";
      document.querySelector("html").setAttribute("data-theme", theme);
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form className="card bg-base-100 p-6 w-full max-w-md" onSubmit={handleLogin}>
        <div className="form-control mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">Password</label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <Link to="/register" className="text-primary">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
