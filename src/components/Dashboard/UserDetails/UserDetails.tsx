import { useEffect, useState } from "react";
import styles from "./UserDetails.module.scss";
import type { UserDto } from "../../../types/UserDto";

interface UserDetailsProps {
  user: UserDto;
  viewUserDetails: (userId: string | null) => void;
}

export default function UserDetails({
  user,
  viewUserDetails,
}: UserDetailsProps) {
  const [activeTab, setActiveTab] = useState("general");
  useEffect(() => {
    if (!user) return;
    console.log("User data:", user);
  }, [user]);

  const tabs = [
    { id: "general", label: "General Details" },
    { id: "documents", label: "Documents" },
    { id: "bank", label: "Bank Details" },
    { id: "loans", label: "Loans" },
    { id: "savings", label: "Savings" },
    { id: "app", label: "App and System" },
  ];

  return (
    <div className={styles.userDetailsInfo}>
      <div className={styles.userDetailsHeader}>
        <div className={styles.topBar}>
          <div className={styles.backLink}>
            <span onClick={() => viewUserDetails(null)}>
              <img src="/images/back-arrow.png" />
            </span>{" "}
            Back to Users
          </div>

          <div className={styles.actions}>
            <button className={`${styles.actionBtn} ${styles.blacklist}`}>
              BLACKLIST USER
            </button>
            <button className={`${styles.actionBtn} ${styles.activate}`}>
              ACTIVATE USER
            </button>
          </div>
        </div>

        <h1 className={styles.pageTitle}>User Details</h1>
        <div className={styles.userSection}>
          <div className={styles.userCard}>
            <div className={styles.avatarSection}>
              <div className={styles.avatar}>
                <img src="/images/user.png" />
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.name}>{user.fullName}</h2>
                <p className={styles.userId}>{user.code}</p>
              </div>
            </div>

            <div className={styles.tierSection}>
              <div className={styles.tier}>
                <span className={styles.tierLabel}>User's Tier</span>
                <div className={styles.stars} data-rating={user.tier}>
                  ★ ★ ★
                </div>
              </div>
            </div>

            <div className={styles.amountSection}>
              <div className={styles.balance}>
                <span className={styles.amount}>₦{user.balance}</span>
                <span className={styles.bank}>
                  {user.accountNumber}/{user.bankName}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.detailsSection}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Personal Information</h2>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label>FULL NAME</label>
              <p>{user.fullName}</p>
            </div>

            <div className={styles.field}>
              <label>PHONE NUMBER</label>
              <p>{user.phone}</p>
            </div>

            <div className={styles.field}>
              <label>EMAIL ADDRESS</label>
              <p>{user.email}</p>
            </div>

            <div className={styles.field}>
              <label>BVN</label>
              <p>{user.bvn}</p>
            </div>

            <div className={styles.field}>
              <label>GENDER</label>
              <p>{user.gender}</p>
            </div>

            <div className={styles.field}>
              <label>MARITAL STATUS</label>
              <p>{user.maritalStatus}</p>
            </div>

            <div className={styles.field}>
              <label>CHILDREN</label>
              <p>{user.children || "none"}</p>
            </div>

            <div className={styles.field}>
              <label>TYPE OF RESIDENCE</label>
              <p>{user.residenceType}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education and Employment</h2>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label>LEVEL OF EDUCATION</label>
              <p>{user.educationLevel}</p>
            </div>

            <div className={styles.field}>
              <label>EMPLOYMENT STATUS</label>
              <p>{user.employmentStatus}</p>
            </div>

            <div className={styles.field}>
              <label>SECTOR OF EMPLOYMENT</label>
              <p>{user.employmentSector}</p>
            </div>

            <div className={styles.field}>
              <label>DURATION OF EMPLOYMENT</label>
              <p>{user.employmentDuration}</p>
            </div>

            <div className={styles.field}>
              <label>OFFICE EMAIL</label>
              <p>{user.officeEmail}</p>
            </div>

            <div className={styles.field}>
              <label>MONTHLY INCOME</label>
              <p>{user.monthlyIncome}</p>
            </div>

            <div className={styles.field}>
              <label>LOAN REPAYMENT</label>
              <p>{user.loanRepayment}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Socials</h2>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label>TWITTER</label>
              <p>{user.twitter}</p>
            </div>

            <div className={styles.field}>
              <label>FACEBOOK</label>
              <p>{user.facebook}</p>
            </div>

            <div className={styles.field}>
              <label>INSTAGRAM</label>
              <p>{user.instagram}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Guarantor</h2>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label>FULL NAME</label>
              <p>{user.guarantor?.fullName}</p>
            </div>

            <div className={styles.field}>
              <label>PHONE NUMBER</label>
              <p>{user.guarantor?.phone}</p>
            </div>

            <div className={styles.field}>
              <label>EMAIL ADDRESS</label>
              <p>{user.guarantor?.email}</p>
            </div>

            <div className={styles.field}>
              <label>RELATIONSHIP</label>
              <p>{user.guarantor?.relationship}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
