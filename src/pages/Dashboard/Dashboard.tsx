import { useMemo, useState } from "react";
import DashboardHeader from "../../components/Dashboard/Header/DashboardHeader";
import Pagination from "../../components/Dashboard/Pagination/Pagination";
import Sidebar from "../../components/Dashboard/SideBar/SideBar";
import StatsCards from "../../components/Dashboard/StatsCard/StatsCard";
import UsersTable from "../../components/Dashboard/UsersTable/UsersTable";
import styles from "./Dashboard.module.scss";
import UserDetails from "../../components/Dashboard/UserDetails/UserDetails";

import type { UserDto } from "../../types/UserDto";
import { sampleUsers } from "../../mockdata";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [users] = useState<UserDto[]>(sampleUsers);
  const [user, setUser] = useState<UserDto | null>(null);

  const viewUserDetails = (userId: string | null) => {
    const selectedUser: UserDto | null =
      users.find((u) => u.id === userId) || null;
    setUser(selectedUser);
  };

  const paginatedUsers: UserDto[] = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  }, [users, currentPage, itemsPerPage]);

  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/svgs/logo.svg" alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Lendsqr</span>
        </div>
        <Sidebar />
      </aside>

      <div className={styles.mainContainer}>
        <DashboardHeader />

        <main className={styles.mainContent}>
          {!user ? (
            <div className={styles.contentWrapper}>
              <h1 className={styles.title}>Users</h1>

              <StatsCards />
              <UsersTable
                key={`${currentPage}-${itemsPerPage}`}
                users={paginatedUsers}
                viewUserDetails={viewUserDetails}
              />

              <Pagination
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
                onPageChange={onPageChange}
                onItemsPerPageChange={(newPerPage) => {
                  setItemsPerPage(newPerPage);
                  setCurrentPage(1);
                }}
              />
            </div>
          ) : (
            <UserDetails user={user} viewUserDetails={viewUserDetails} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
