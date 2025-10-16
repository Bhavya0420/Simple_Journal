import React from "react";
import { Link, useNavigate } from "react-router";
import { PlusIcon, LogOutIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/welcome");
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            Simple Journal
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {token ? (
              <>
                <Link to="/create" className="btn btn-primary flex items-center gap-2">
                  <PlusIcon className="size-5" />
                  <span>New Note</span>
                </Link>
                <button onClick={handleLogout} className="btn btn-outline flex items-center gap-1">
                  <LogOutIcon className="size-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-outline btn-primary">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
