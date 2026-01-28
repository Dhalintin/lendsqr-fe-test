import type { SortConfig } from "../types/sort";
import type { UserDto } from "../types/UserDto";

export function sortUsers(users: UserDto[], config: SortConfig): UserDto[] {
  return [...users].sort((a, b) => {
    const field = config.field;
    let valueA: any = a[field];
    let valueB: any = b[field];

    if (field === "dateJoined") {
      valueA = new Date(valueA as string).getTime();
      valueB = new Date(valueB as string).getTime();
    }

    if (field === "status") {
      const statusOrder = {
        Active: 1,
        Pending: 2,
        Inactive: 3,
        Blacklisted: 4,
      };
      valueA = statusOrder[valueA as keyof typeof statusOrder] ?? 999;
      valueB = statusOrder[valueB as keyof typeof statusOrder] ?? 999;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) return config.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return config.direction === "asc" ? 1 : -1;
    return 0;
  });
}
