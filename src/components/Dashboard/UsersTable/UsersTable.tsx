import { useEffect, useState } from "react";
import styles from "./UsersTable.module.scss";
import { sortUsers } from "../../../utils/filter.util";
import type { SortDirection, SortField } from "../../../types/sort";
import type { UserDto } from "../../../types/UserDto";

export default function UsersTable({
  users,
  viewUserDetails,
}: {
  users: UserDto[];
  viewUserDetails: (userId: string) => void;
}) {
  const [isFlipped, setIsFlipped] = useState<String[]>([]);

  const [usersList, setUsersList] = useState<UserDto[]>(users);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const filterUsers = (column: SortField) => {
    let direction: SortDirection;

    if (isFlipped.includes(column)) {
      direction = "asc";
      setIsFlipped(isFlipped.filter((col) => col !== column));
    } else {
      setIsFlipped([...isFlipped, column]);
      direction = "desc";
    }

    const newUsers = sortUsers(users, { field: column, direction });
    setUsersList(newUsers);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openMenuId &&
        !(e.target as HTMLElement).closest(`.${styles.actions}`)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenuId]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>
              <span className={styles.sortableHeader}>
                ORGANIZATION{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("organization") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("organization")}
                />
              </span>
            </th>
            <th>
              <span className={styles.sortableHeader}>
                USERNAME{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("username") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("username")}
                />
              </span>
            </th>
            <th>
              <span className={styles.sortableHeader}>
                EMAIL{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("email") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("email")}
                />
              </span>
            </th>
            <th>
              <span className={styles.sortableHeader}>
                PHONE NUMBER{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("phone") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("phone")}
                />
              </span>
            </th>
            <th>
              <span className={styles.sortableHeader}>
                DATE JOINED{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("dateJoined") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("dateJoined")}
                />
              </span>
            </th>
            <th>
              <span className={styles.sortableHeader}>
                STATUS{" "}
                <img
                  src="/svgs/filter-results.svg"
                  alt="filter"
                  className={`${styles.flipImage} ${
                    isFlipped.includes("status") ? styles.flipped : ""
                  } ${styles.sortIcon}`}
                  onClick={() => filterUsers("status")}
                />
              </span>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {usersList.map((user) => {
            const isMenuOpen = openMenuId === (user.id || user.username);
            return (
              <tr key={user.id || user.username}>
                <td>{user.organization}</td>

                <td>{user.username}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.dateJoined}</td>

                <td>
                  {
                    <span
                      className={`${styles.statusBadge} ${
                        styles[user.status.toLowerCase()]
                      }`}
                    >
                      {user.status}
                    </span>
                  }
                </td>

                <td className={styles.actions}>
                  {
                    <button
                      className={styles.moreBtn}
                      onClick={() => setOpenMenuId(user.id || user.username)}
                    >
                      ⋯
                    </button>
                  }

                  {isMenuOpen && (
                    <div className={styles.actionMenu}>
                      <button
                        className={styles.menuItem}
                        onClick={() => {
                          viewUserDetails(user.id);

                          setOpenMenuId(null);
                        }}
                      >
                        <img src="/images/view.png" alt="View Details" /> View
                        Details
                      </button>

                      <button
                        className={`${styles.menuItem} ${styles.blacklist}`}
                        onClick={() => {
                          console.log("Blacklist:", user.username);

                          setOpenMenuId(null);
                        }}
                      >
                        <img src="/images/blacklist.png" alt="Blacklist user" />{" "}
                        Blacklist User
                      </button>

                      <button
                        className={`${styles.menuItem} ${styles.activate}`}
                        onClick={() => {
                          setOpenMenuId(null);
                        }}
                      >
                        <img src="/images/whitelist.png" alt="Whitelist user" />{" "}
                        Activate User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
