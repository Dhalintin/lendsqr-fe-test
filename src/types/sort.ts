export type SortField =
  | "organization"
  | "username"
  | "email"
  | "phone"
  | "dateJoined"
  | "status";

export type SortDirection = "asc" | "desc";

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}
