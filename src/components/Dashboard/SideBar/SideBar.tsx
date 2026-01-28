import styles from "./Sidebar.module.scss";
import { useState } from "react";

const menuItems = [
  {
    groupName: "CUSTOMERS",
    items: [
      { label: "Users", path: "/users", icon: "users" },
      { label: "Guarantors", path: "/guarantors", icon: "guarantors" },
      { label: "Loans", path: "/loans", icon: "loans" },
      { label: "Decision Models", path: "/decision-models", icon: "decision" },
      { label: "Savings", path: "/savings", icon: "savings" },
      { label: "Loan Requests", path: "/loan-requests", icon: "loan" },
      { label: "Whitelist", path: "/whitelist", icon: "whitelist" },
      { label: "Karma", path: "/karma", icon: "karma" },
    ],
  },
  {
    groupName: "BUSINESSES",
    items: [
      { label: "Organization", path: "/organization", icon: "briefcase" },
      { label: "Loan Products", path: "/loan-products", icon: "loan" },
      { label: "Savings Products", path: "/savings-products", icon: "bank" },
      { label: "Fees and Charges", path: "/fees-and-charges", icon: "fees" },
      { label: "Transactions", path: "/transactions", icon: "transaction" },
      { label: "Services", path: "/services", icon: "services" },
      {
        label: "Service Account",
        path: "/service-account",
        icon: "service-account",
      },
      { label: "Settlements", path: "/settlements", icon: "settlements" },
      { label: "Reports", path: "/reports", icon: "reports" },
    ],
  },
  {
    groupName: "SETTINGS",
    items: [
      { label: "Preferences", path: "/preferences", icon: "preferences" },
      { label: "Fees and Pricing", path: "/fees-and-pricing", icon: "badge" },
      { label: "Audit Logs", path: "/audit-logs", icon: "clipboard" },
    ],
  },
];

export default function Sidebar() {
  const [isActive, setIsActive] = useState<string>("dashboard");

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <span className={`${styles.item} ${styles.space}`}>
          <img src={`/images/briefcase.png`} className={`${styles.icon} `} />
          <span>Switch Organization</span>
        </span>
        <div
          className={`${styles.item} ${styles.space} ${
            isActive === "dashboard" ? styles.active : ""
          }`}
          onClick={() => {
            setIsActive("dashboard");
          }}
        >
          <img src={`/images/home.png`} className={styles.icon} />
          <span>Dashboard</span>
        </div>
        {menuItems.map((group) => (
          <div key={group.groupName} className={styles.section}>
            <div className={styles.title}>{group.groupName}</div>

            {group.items.map((item) => {
              return (
                <div
                  key={item.path}
                  className={`${styles.item} ${
                    isActive === item.path ? styles.active : ""
                  }`}
                  onClick={() => {
                    setIsActive(item.path);
                  }}
                >
                  <img
                    src={`/images/${item.icon}.png`}
                    className={styles.icon}
                    alt={item.label}
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
