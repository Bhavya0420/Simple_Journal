import { useEffect } from "react";
import { Link } from "react-router";

const WelcomePage = () => {
 useEffect(() => {
    // Apply the saved theme from localStorage
    const theme = localStorage.getItem("theme") || "lemonade";
    document.querySelector("html").setAttribute("data-theme", theme);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-5xl font-bold text-primary mb-6 font-mono">
        Welcome to Simple Journal
      </h1>
      <p className="text-base-content/70 mb-8 max-w-md">
        Organize your thoughts and keep track of your notes with ease. Log in or create an account to get started!
      </p>
      <div className="flex gap-4">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-outline btn-primary">Sign Up</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
