import { useState } from "react";
import styles from "./DashboardHeader.module.scss";

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchField}
          placeholder="Search for anything"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchButton}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <div className={styles.actions}>
        <a href="#" className={styles.docsLink}>
          Docs
        </a>

        <button className={styles.notificationBtn}>
          <span>
            <img src="/images/bell.png" className={styles.bell} />
          </span>
        </button>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <img src="/images/profile.png" className={styles.profileImage} />
          </div>
          <span className={styles.userName}>Adedeji</span>
          <span className={styles.dropdownArrow}>▼</span>
        </div>
      </div>
    </header>
  );
}
