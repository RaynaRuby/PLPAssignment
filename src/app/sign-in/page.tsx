"use client";

import { useState } from "react";
import styles from "./signin.module.css"; // Import the CSS module

export default function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fixed credentials for demo
    const demoUserID = "S1023456A";
    const demoPassword = "password123";

    // Check if the entered email and password match the demo credentials
    if (userID === demoUserID && password === demoPassword) {
      window.location.href = "/student"; // Redirect using window.location
    } else {
      setError("Invalid user ID or password.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Untitled design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Student Portal Login</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="userID" className="block text-gray-700 font-semibold">User ID</label>
              <input
                type="userID"
                id="userID"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
