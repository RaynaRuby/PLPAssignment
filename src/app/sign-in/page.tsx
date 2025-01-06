"use client";

import { useState } from "react";

import styles from "./signin.module.css"; 

const AdminPage = () => {
    const adminCredentials = {
        username: "admin",
        password: "admin",
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === adminCredentials.username && password === adminCredentials.password) {
            setIsAuthenticated(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid Credentials!");
        }
    };

if (isAuthenticated) {
    window.location.href = '/student';
    return null;
}


    return (
        <div className={styles.loginContainer}>
            <h1>Student Login</h1>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className={styles.inputField}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    );
};

export default AdminPage;