"use client";

import { useState } from 'react';
import styles from './page.module.css';  // Import the CSS Module
import Link from 'next/link';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search logic, e.g., redirecting to a search results page
    alert(`Searching for: ${query}`);
  };

  return (
    <div className={styles.body}> {/* Apply the body class from CSS module */}
      <div className={styles.App}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1>My Info Finder</h1>
          </div>
          <form onSubmit={handleSearch} className={styles['search-form']}> {/* Apply form class */}
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles['search-input']}
            />
            <button type="submit" className={styles['search-button']}>Search</button> {/* Apply button class */}
          </form>
          <div className={styles.footer}> {/* Apply footer class */}
            <Link href="/Login">
                <button className={styles['footer-button']}>Go to Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
